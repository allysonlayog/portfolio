#!/bin/sh
# Builds the site and publishes it to the gh-pages branch on GitHub.
# gh-pages pushes from its own temporary copy of the repo, which doesn't have
# this repo's settings. So we hand every git command this repo's login and
# commit name through the environment: GitHub login from the Mac keychain
# (not the gh tool), saved separately for each repo address.
cd "$(dirname "$0")/.." || exit 1

name=$(git config --local user.name)
email=$(git config --local user.email)
if [ -z "$name" ] || [ -z "$email" ]; then
  echo "Set user.name and user.email for this repo first."
  exit 1
fi

export GIT_CONFIG_COUNT=5
export GIT_CONFIG_KEY_0=credential.https://github.com.helper GIT_CONFIG_VALUE_0=
export GIT_CONFIG_KEY_1=credential.https://github.com.helper GIT_CONFIG_VALUE_1=osxkeychain
export GIT_CONFIG_KEY_2=credential.useHttpPath GIT_CONFIG_VALUE_2=true
export GIT_CONFIG_KEY_3=user.name GIT_CONFIG_VALUE_3="$name"
export GIT_CONFIG_KEY_4=user.email GIT_CONFIG_VALUE_4="$email"

npm run build:pages || exit 1
npx gh-pages -d dist --nojekyll -m "Deploy the site to GitHub Pages"
