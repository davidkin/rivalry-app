FROM nginx

RUN apt-get update \
  && apt-get install -y build-essential libpng-dev \
  curl \
  && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
  && apt-get install -y nodejs \
  cowsay \
  && ln -s /usr/games/cowsay /usr/bin/cowsay

WORKDIR /usr/app

COPY  . ./
COPY  ./rivalry-app.com.conf /etc/nginx/conf.d/default.conf

RUN npm install | bash -
RUN npm run build -- --output-path=./dist/out
RUN cowsay "Everything's ready, my Lord!"

CMD nginx -g 'daemon off;'