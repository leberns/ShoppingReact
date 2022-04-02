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
```

## Development

### Production Build
```
cd C:\Dev\GitHub\leberns\ShoppingReact\ClientApp\
npm run-script build
```

### Debugging
```
cd C:\Dev\GitHub\leberns\ShoppingReact\
dotnet run
```

* Open browser according to the message in console:
```
Now listening on: https://localhost:7213
```
