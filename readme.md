# multiline `cowsay`

## usage

```sh
deno run https://raw.githubusercontent.com/Cactus-0/multiline-cowsay/master/main.ts 'What to eat?'
```

Or:
```sh
alias cowsay='deno run https://raw.githubusercontent.com/Cactus-0/multiline-cowsay/master/main.ts'
```

Example:
```sh
$ cowsay 'What to eat?' | cowsay
/------------------------------\
| /--------------\             |
| | what to eat? |             |
| \--------------/             |
|        \                     |
|         \   ^__^             |
|          \  (oo)\_______     |
|             (__)\       )\/\ |
|                 ||----w |    |
|                 ||     ||    |
\------------------------------/
       \
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
