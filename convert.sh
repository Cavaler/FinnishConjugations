#!/bin/bash
python -c 'import yaml, json; print(json.dumps(yaml.safe_load(open("src/nouns.yaml", encoding="utf8"))))' >src/nouns.json
python -c 'import yaml, json; print(json.dumps(yaml.safe_load(open("src/verbs.yaml", encoding="utf8"))))' >src/verbs.json
