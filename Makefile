dc := docker compose -f ./docker-compose.development.yml

.PHONY: up
up:
	$(dc) up -d --build

.PHONY: down
down:
	$(dc) down

.PHONY: restart
restart:
	$(dc) restart

.PHONY: reup
reup:
	@make down
	@make up

.PHONY: rm
rm:
	$(dc) down --rmi all

.PHONY: logs
logs:
	$(dc) logs -f

.PHONY: node
node:
	$(dc) exec node /bin/sh

.PHONY: tests
tests:
	$(dc) exec tests /bin/sh

.PHONY: test
test:
	$(dc) exec tests npm test