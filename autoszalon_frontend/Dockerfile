# Alap image
FROM node:18

# Mappa beállítása
WORKDIR /app

# Fájlok másolása
COPY package*.json ./
RUN npm install

# Alkalmazás build
COPY . .
RUN npm run build

# Szerver indítása
EXPOSE 80
CMD ["npx", "serve", "-s", "dist"]
