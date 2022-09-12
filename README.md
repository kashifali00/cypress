# cypress

```Dependencies```

1. Nodejs 16 or higher
2. install as-a utility to keep sceret password or configuration
`npm install -g as-a`
3. cypress version should be >=v10


1. create a project folder and cd into it.
2. open the terminal and type npm init and configure the package.json
3. on terminal type npm install cypress


`preinstall`
- npm install -g saucectl
we need to configure sauce username and key using following command

`saucectl configure username tautumation84@gmail.com
`saucectl configure key `

now go to cypress folder where test files are available and open the terminal and type

`saucectl init` and configure the project as per your choice

once all configuration are done successfully then we will have .sauce folder in the same directory and new file named
config.yml will created. 

``` Run test on saucelab ```

`saucectl run`

``saucectl key and password``
`saucectl configure --username oauth-tautomation184-3e044 --accessKey e5fa89ab-4659-4fb8-9c14-f5848066cb30`

#Run from commandline
```npx cypress run --browser chrome --headed --env email=kashifali@kashif.com,password=123456 --spec "cypress\e2e\features\login_with_valid_cred.feature"```


