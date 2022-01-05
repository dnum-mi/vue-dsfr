FROM node:16.13.1-alpine3.14 as dev

WORKDIR /app

CMD ["npm", "run", "dev"]

FROM dev as storybook-build

COPY ./package.json ./package-lock.json ./
RUN npm i

COPY ./build-css.mjs ./index.html ./postcss.config.js ./rollup.config.js ./vite.config.js ./.browserslistrc ./
COPY ./src ./src
COPY ./public ./public
COPY ./.storybook ./.storybook

RUN npm run build-storybook

FROM nginx:1.21.4-alpine as storybook

COPY --from=storybook-build /app/storybook-static /usr/share/nginx/html
