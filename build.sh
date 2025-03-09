# build the .love package (a .zip)
zip sample.zip -r *.lua

# run love.js on the project - this will create a new folder with the love.js assets
love.js sample.zip sample -t sample -c

# copy the template assets to the love.js project
cp index.js sample/index.js && cp template.html sample/index.html
