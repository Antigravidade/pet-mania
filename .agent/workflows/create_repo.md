---
description: Create a new private repository in the Antigravidade organization
---

Step to create a standard private repository for the organization:

1. Ensure you are in the root directory of the project you want to push.
2. Execute the creation command (replace `[REPO_NAME]` with the actual repository name):

```bash
gh repo create Antigravidade/[REPO_NAME] --private --source=. --remote=origin
```
