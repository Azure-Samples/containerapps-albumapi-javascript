#!/bin/bash

# Emit a file that captures all of the environment variables that are needed for the Container Apps tutorial path
# You an source this file to restore those environment variables if the shell session is reset.

cat > aca_variables.env << EOF
#!/bin/bash
$(env | sed -n "s/\(.*_ACA=\)\(.*\)/export \1'\2'/p" | sort)
EOF

cat aca_variables.env