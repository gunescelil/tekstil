# PostgreSQL Bağlantı Bilgileri

## Local (Docker Compose ile)
- Host: postgres
- Port: 5432
- User: postgres
- Password: postgres
- DB Name: tekstil_db

## Cloud (ör. Railway, Render, Supabase, AWS RDS)
- Servis sağlayıcının verdiği host, port, user, password, dbname bilgilerini .env dosyasına girin.
- Örnek:
  DB_HOST=cloud_host_adresi
  DB_PORT=5432
  DB_USER=cloud_user
  DB_PASSWORD=cloud_password
  DB_NAME=cloud_db
