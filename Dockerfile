FROM node:8.11.1
WORKDIR /authentication

COPY ./ ./

RUN npm install

 

CMD ["/bin/bash"]

