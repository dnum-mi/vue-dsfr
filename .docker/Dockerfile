FROM nexus.forge-dc.cloudmi.minint.fr/node:16.13.1-alpine3.14 as dev

WORKDIR /app

CMD ["npm", "run", "dev"]

FROM dev as storybook-build

ARG HTTP
ENV HTTP=${HTTP}

COPY ./package.json ./package-lock.json ./

RUN npm config set proxy $HTTP
RUN npm config set https-proxy $HTTP
RUN npm config set strict-ssl=false 
RUN npm config set registry=http://registry.npmjs.com

RUN npm ping --registry http://registry.npmjs.com
RUN npm config get proxy

RUN npm i

COPY ./build-css.mjs ./index.html ./postcss.config.js ./rollup.config.js ./vite.config.js ./.browserslistrc ./
COPY ./src ./src
COPY ./public ./public
COPY ./.storybook ./.storybook

RUN npm run build-storybook

FROM nexus.forge-dc.cloudmi.minint.fr/nginx:1.21.4-alpine as storybook

COPY --from=storybook-build /app/storybook-static /usr/share/nginx/html


