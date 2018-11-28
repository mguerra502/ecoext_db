#This is a sample Image 
FROM ubuntu 
RUN apt-get install –y nginx 
EXPOSE 80
EXPOSE 8080
ENV MYNAMEIS "MIGUEL"

CMD [“echo”,”Image created”] 