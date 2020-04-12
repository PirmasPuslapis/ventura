#!/usr/bin/env sh

# abort on errors
set -e

# build
export NODE_ENV=production
export DISTRIBUTION_DIRECTORY='dist'
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
#echo 'www.justgivemeaccess.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/PirmasPuslapis/ventura.git/ master:gh-pages

cd -
