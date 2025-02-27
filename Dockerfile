FROM nginx:latest

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pm2 && \
    apt-get install -y procps nano net-tools iputils-ping

WORKDIR /var/www/html

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY ./default /etc/nginx/sites-available/default

RUN chmod +x /var/www/html/start.sh

EXPOSE 80 5002

CMD ["sh", "/var/www/html/start.sh"]
