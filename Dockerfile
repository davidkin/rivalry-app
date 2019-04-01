FROM nginx

RUN apt-get update \
  && apt-get install -y build-essential libpng-dev \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
  && apt-get install -y nodejs \
  && apt-get install -y cowsay \
  && ln -s /usr/games/cowsay /usr/bin/cowsay

WORKDIR /usr/app

COPY  . ./
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf

RUN npm install | bash -
RUN npm run build -- --output-path=./dist/out
RUN cowsay "Everything's ready, my Lord!"

CMD nginx -g 'daemon off;'