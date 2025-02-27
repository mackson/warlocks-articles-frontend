FROM nginx:latest

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_23.x | bash - && \
    apt-get install -y nodejs

RUN apt-get install -y procps \
    && apt-get install -y nano \
    && apt-get install -y net-tools \
    && apt-get install -y iputils-ping

WORKDIR /var/www/html

COPY package*.json ./

COPY . .

RUN npm run build

COPY ./default /etc/nginx/sites-available/default

RUN chmod +x /var/www/html/start.sh

EXPOSE 80 5002

CMD ["sh", "/var/www/html/start.sh"]
