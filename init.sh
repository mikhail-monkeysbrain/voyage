mkdir app
cd app
mkdir dist
mkdir src
cd src
mkdir img
mkdir jade
cd jade
echo "include blocks/head" > index.jade
mkdir blocks
cd blocks
echo "!" > head.jade
cd ../
mkdir elements
cd ../
mkdir js
mkdir stylus
cd stylus
echo "" > style.styl
echo "" > variables.styl
echo "" > helpers.styl
mkdir blocks
cd ../
mkdir vendors
cd ../
cd dist
mkdir css
mkdir fonts
mkdir img
mkdir js
mkdir vendors
cd css
echo "*{vertical-align:baseline;font-weight:inherit;font-family:inherit;font-style:inherit;font-size:100%;border:0;outline:0;padding:0;margin:0}" > reset.css
