FROM node:18.17.1-alpine AS builder

WORKDIR /usr/local/app

COPY . .

RUN npm install --frozen-lockfile && \
    npm run build

ENV PORT=80

CMD [ "npm", "run", "start" ]

# docker build --platform linux/arm64 -t diffsynccode .
# # operation check
# docker run -it --rm -p 8080:80 diffsynccode
# docker tag diffsynccode yumekiti/diffsynccode
# docker push yumekiti/diffsynccode