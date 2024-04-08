
up:
	docker compose up -d
down:
	docker compose down
rs:
	git pull && docker compose build && docker compose down  && docker compose up -d && docker logs -f example-dynamic-link-dosi-container
