# Decorator bug

## What

https://github.com/babel/babel/issues/16661

## How

1. run `yarn dev` command

2. open `http://localhost:8080`

3. open console, show error

4. open webpack.config.js, comment line 29 - 32, restart the compiler, will working well
