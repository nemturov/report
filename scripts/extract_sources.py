#!/usr/bin/env python3
"""Rebuild readable source text, exact chart JSON, and skill table JSON offline."""
from pathlib import Path
from html.parser import HTMLParser
import hashlib, json, re
ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / 'research/2026-10-25-adapty-state-of-paywalls-2026'
class ReportParser(HTMLParser):
    def __init__(self):
        super().__init__(); self.skip = 0; self.parts = []; self.scripts=[]; self.current=None
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style'):
            self.skip += 1
            if tag == 'script': self.current=[]
        if tag in ('h1','h2','h3','h4','p','li','section','br'): self.parts.append('\n')
    def handle_endtag(self, tag):
        if tag in ('script','style'):
            self.skip -= 1
            if tag=='script' and self.current is not None:
                self.scripts.append(''.join(self.current)); self.current=None
        if tag in ('h1','h2','h3','h4','p','li','section'): self.parts.append('\n')
    def handle_data(self, data):
        if self.current is not None: self.current.append(data)
        if not self.skip: self.parts.append(data)
p=ReportParser(); p.feed((BASE/'sources/web/report.html').read_text())
(BASE/'sources/report-text.txt').write_text('\n'.join(x.strip() for x in ''.join(p.parts).splitlines() if x.strip())+'\n')
(BASE/'sources/web/inline-scripts.js').write_text('\n\n'.join(p.scripts))
s=(BASE/'sources/web/report-1.86edeffa.js').read_text()
assert s.startswith('const D = ')
data, _=json.JSONDecoder().raw_decode(s[len('const D = '):])
(BASE/'data').mkdir(exist_ok=True)
(BASE/'data/chart-data.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
skill=(ROOT/'skills/state-of-paywalls-2026-by-adapty/SKILL.md').read_text()
tables=[]; heading=''; subheading=''; lines=skill.splitlines(); i=0
while i<len(lines):
    line=lines[i]
    if line.startswith('#'): heading=line.lstrip('# '); subheading=''
    elif line.startswith('**') and line.endswith('**'): subheading=line.strip('*')
    if line.startswith('|') and i+1<len(lines) and re.fullmatch(r'[|:\- ]+',lines[i+1]):
        split=lambda x:[v.strip() for v in x.strip().strip('|').split('|')]
        header=split(line); rows=[]; i+=2
        while i<len(lines) and lines[i].startswith('|'):
            row=split(lines[i]); assert len(row)==len(header),(heading,row)
            rows.append(row); i+=1
        tables.append(dict(section=heading,subsection=subheading,columns=header,rows=rows))
        continue
    i+=1
(BASE/'data/skill-tables.json').write_text(json.dumps(tables,ensure_ascii=False,indent=2)+'\n')
manifest={str(f.relative_to(ROOT)):hashlib.sha256(f.read_bytes()).hexdigest() for folder in [BASE/'sources',ROOT/'skills/state-of-paywalls-2026-by-adapty'] for f in sorted(folder.rglob('*')) if f.is_file()}
(BASE/'sources/sha256.json').write_text(json.dumps({k:v for k,v in manifest.items() if not k.endswith('sha256.json')},ensure_ascii=False,indent=2)+'\n')
print(f'Extracted {len(data)} chart datasets; {len(tables)} skill tables; {sum(len(t["rows"]) for t in tables)} rows.')
