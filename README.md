# ShoppingReact

## Features

* backend: .Net 6 Web API
* frontend: React 18

## Project initialization

```
C:\Dev\GitHub\leberns\
git clone https://github.com/leberns/ShoppingReact.git
cd ShoppingReact\
dotnet new react
```

Update to Rect 18 (lastest)

```
cd C:\Dev\GitHub\leberns\ShoppingReact\ClientApp\

npm install --save react@latest react-dom@latest
npm install --save react-router-bootstrap@latest react-router-dom@latest react-scripts@latest reactstrap@latest
npm install --save rimraf@latest

npm install --save-dev ajv@latest
npm install --save-dev cross-env@latest
npm install --save-dev eslint@latest eslint-config-react-app@latest eslint-plugin-flowtype@latest eslint-plugin-import@latest eslint-plugin-jsx-a11y@latest eslint-plugin-react@latest
npm install --save-dev nan@latest
npm install --save-dev typescript@latest
```

Add TypeScript
```
npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest
npm install --save-dev @types/react-router-dom
```

## Development

### Debugging
```
cd C:\Dev\GitHub\leberns\ShoppingReact\
dotnet run
```

* Open browser according to the message in console:
```
Now listening on: https://localhost:7213
```

### Production Build
```
cd C:\Dev\GitHub\leberns\ShoppingReact\ClientApp\
npm run-script build
```
