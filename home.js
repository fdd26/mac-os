var svgMappings = {
	"apple-icon": 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNTA4NSA0Ljc0ODgzQzkuNjE5OTIgNC43NDg4MyA5Ljc5MjM3IDQuNzYyMDkgMTAuMDI1OCA0Ljc4ODYyQzEwLjI2NDYgNC44MDk4NSAxMC41MzUyIDQuODY4MjEgMTAuODM3NiA0Ljk2MzcyQzExLjE0MDEgNS4wNTkyMyAxMS40NDc4IDUuMjEzMSAxMS43NjA5IDUuNDI1MzRDMTIuMDczOSA1LjYzNzU4IDEyLjM2MzEgNS45MzQ3MiAxMi42Mjg0IDYuMzE2NzVDMTIuNjAxOSA2LjMzMjY3IDEyLjUwMTEgNi40MDQzIDEyLjMyNiA2LjUzMTY0QzEyLjE1NjIgNi42NTg5OCAxMS45NjI1IDYuODQ0NjkgMTEuNzQ1IDcuMDg4NzdDMTEuNTI3NCA3LjMyNzU0IDExLjMzNjQgNy42MzI2MyAxMS4xNzE5IDguMDA0MDVDMTEuMDEyNyA4LjM3MDE3IDEwLjkzMzIgOC44MDc5MSAxMC45MzMyIDkuMzE3MjlDMTAuOTMzMiA5LjkwMDk0IDExLjAzNCAxMC4zOTQ0IDExLjIzNTYgMTAuNzk3N0MxMS40NDI1IDExLjIwMDkgMTEuNjgxMyAxMS41MjcyIDExLjk1MTkgMTEuNzc2NkMxMi4yMjc4IDEyLjAyNiAxMi40NzE5IDEyLjIwOSAxMi42ODQxIDEyLjMyNThDMTIuOTAxNyAxMi40MzcyIDEzLjAxODQgMTIuNDk1NiAxMy4wMzQzIDEyLjUwMDlDMTMuMDI5IDEyLjUyMjEgMTIuOTg5MiAxMi42NDE1IDEyLjkxNDkgMTIuODU5QzEyLjg0MDcgMTMuMDcxMyAxMi43MjM5IDEzLjM0NzIgMTIuNTY0NyAxMy42ODY4QzEyLjQxMDkgMTQuMDIxIDEyLjIwOTIgMTQuMzcxMiAxMS45NTk5IDE0LjczNzRDMTEuNzMxNyAxNS4wNjEgMTEuNDk1NiAxNS4zNzE0IDExLjI1MTUgMTUuNjY4NkMxMS4wMTI3IDE1Ljk2NTcgMTAuNzUwMSAxNi4yMDcxIDEwLjQ2MzYgMTYuMzkyOEMxMC4xODI0IDE2LjU4MzggOS44NjQgMTYuNjc5MyA5LjUwODUgMTYuNjc5M0M5LjIzNzg5IDE2LjY3OTMgOS4wMDcwOCAxNi42NDc1IDguODE2MDYgMTYuNTgzOEM4LjYyNTA1IDE2LjUyMDIgOC40NDE5OSAxNi40NDU5IDguMjY2ODkgMTYuMzYxQzguMDk3MSAxNi4yODE0IDcuOTA4NzQgMTYuMjA5OCA3LjcwMTgxIDE2LjE0NjFDNy40OTQ4NyAxNi4wODI0IDcuMjM3NTMgMTYuMDUwNiA2LjkyOTc5IDE2LjA1MDZDNi41MjY1MyAxNi4wNTA2IDYuMTg5NiAxNi4xMDM2IDUuOTE4OTkgMTYuMjA5OEM1LjY1MzY5IDE2LjMyMTIgNS40MDE2NiAxNi40MyA1LjE2Mjg5IDE2LjUzNjFDNC45MjQxMiAxNi42NDIyIDQuNjQyOSAxNi42OTUzIDQuMzE5MjQgMTYuNjk1M0MzLjgyNTc4IDE2LjY5NTMgMy4zOTA2OSAxNi40OTg5IDMuMDEzOTcgMTYuMTA2M0MyLjY0MjU1IDE1LjcxMzcgMi4yNjA1MSAxNS4yNDQxIDEuODY3ODcgMTQuNjk3NkMxLjU2NTQzIDE0LjI2MjUgMS4yODk1MiAxMy43NjExIDEuMDQwMTQgMTMuMTkzM0MwLjc5MDc1NiAxMi42MjU2IDAuNTkxNzgxIDEyLjAyMzMgMC40NDMyMTMgMTEuMzg2NkMwLjI5NDY0NiAxMC43NDk5IDAuMjIwMzYyIDEwLjExMzIgMC4yMjAzNjIgOS40NzY0N0MwLjIyMDM2MiA4LjQ1NzcyIDAuNDE0MDMgNy42MDA4IDAuODAxMzY4IDYuOTA1NzFDMS4xODg3IDYuMjEwNjMgMS42ODQ4MSA1LjY4NTM0IDIuMjg5NyA1LjMyOTgzQzIuODk0NTggNC45NzQzMyAzLjUyMzM0IDQuNzk2NTggNC4xNzU5OCA0Ljc5NjU4QzQuNTIwODcgNC43OTY1OCA0Ljg0NDUzIDQuODUyMyA1LjE0Njk3IDQuOTYzNzJDNS40NTQ3MiA1LjA3NTE1IDUuNzQxMjQgNS4xODkyMyA2LjAwNjU0IDUuMzA1OTZDNi4yNzE4NCA1LjQxNzM4IDYuNTEzMjcgNS40NzMxIDYuNzMwODEgNS40NzMxQzYuOTM3NzQgNS40NzMxIDcuMTgxODIgNS40MTQ3MyA3LjQ2MzA0IDUuMjk4QzcuNzQ0MjUgNS4xNzU5NiA4LjA1NDY2IDUuMDUzOTIgOC4zOTQyNCA0LjkzMTg5QzguNzM5MTMgNC44MDk4NSA5LjExMDU1IDQuNzQ4ODMgOS41MDg1IDQuNzQ4ODNaTTguOTUxMzcgMy40NTk0N0M4LjY4NjA3IDMuNzgzMTQgOC4zNTE3OSA0LjA1MTA5IDcuOTQ4NTQgNC4yNjMzM0M3LjU1MDU5IDQuNDc1NTcgNy4xNzM4NiA0LjU4MTY5IDYuODE4MzYgNC41ODE2OUM2Ljc0NDA4IDQuNTgxNjkgNi42NzI0NCA0LjU3MzczIDYuNjAzNDcgNC41NTc4MUM2LjU5ODE2IDQuNTM2NTkgNi41OTAyIDQuNDk5NDUgNi41Nzk1OSA0LjQ0NjM5QzYuNTc0MjggNC4zOTMzMyA2LjU3MTYzIDQuMzM0OTYgNi41NzE2MyA0LjI3MTI5QzYuNTcxNjMgMy44NjgwMyA2LjY1OTE4IDMuNDc1MzkgNi44MzQyOCAzLjA5MzM2QzcuMDA5MzggMi43MTEzMyA3LjIxMSAyLjM5Mjk3IDcuNDM5MTYgMi4xMzgyOEM3LjcyMDM4IDEuODA0IDguMDc1ODggMS41MjU0NCA4LjUwNTY2IDEuMzAyNTlDOC45NDA3NiAxLjA3OTc0IDkuMzU3MjggMC45NjAzNTIgOS43NTUyMiAwLjk0NDQzNEM5Ljc3MTE0IDEuMDM0NjQgOS43NzkxIDEuMTM4MSA5Ljc3OTEgMS4yNTQ4M0M5Ljc3OTEgMS42NjM0IDkuNzAyMTYgMi4wNjEzNSA5LjU0ODI5IDIuNDQ4NjhDOS4zOTQ0MiAyLjgzMDcxIDkuMTk1NDQgMy4xNjc2NCA4Ljk1MTM3IDMuNDU5NDdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4=',
	"focus": 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTQuMDM3NkM2LjA5NDQgMTQuMDM3NiA1LjI0MTcgMTMuODY0MSA0LjQ0MTg5IDEzLjUxNzFDMy42NDIwOSAxMy4xNzQzIDIuOTM3NSAxMi42OTgyIDIuMzI4MTIgMTIuMDg4OUMxLjcxODc1IDExLjQ3OTUgMS4yNDA1NiAxMC43NzcgMC44OTM1NTUgOS45ODE0NUMwLjU1MDc4MSA5LjE4MTY0IDAuMzc5Mzk1IDguMzI2ODIgMC4zNzkzOTUgNy40MTY5OUMwLjM3OTM5NSA2LjUxMTM5IDAuNTUwNzgxIDUuNjYwODEgMC44OTM1NTUgNC44NjUyM0MxLjI0MDU2IDQuMDY1NDMgMS43MTY2MyAzLjM2MDg0IDIuMzIxNzggMi43NTE0NkMyLjkzMTE1IDIuMTQyMDkgMy42MzU3NCAxLjY2NjAyIDQuNDM1NTUgMS4zMjMyNEM1LjIzNTM1IDAuOTc2MjM3IDYuMDg4MDUgMC44MDI3MzQgNi45OTM2NSAwLjgwMjczNEM3Ljg5OTI1IDAuODAyNzM0IDguNzUxOTUgMC45NzYyMzcgOS41NTE3NiAxLjMyMzI0QzEwLjM1NTggMS42NjYwMiAxMS4wNjA0IDIuMTQyMDkgMTEuNjY1NSAyLjc1MTQ2QzEyLjI3NDkgMy4zNjA4NCAxMi43NTMxIDQuMDY1NDMgMTMuMTAwMSA0Ljg2NTIzQzEzLjQ0NzEgNS42NjA4MSAxMy42MjA2IDYuNTExMzkgMTMuNjIwNiA3LjQxNjk5QzEzLjYyMDYgOC4zMjY4MiAxMy40NDcxIDkuMTgxNjQgMTMuMTAwMSA5Ljk4MTQ1QzEyLjc1MzEgMTAuNzc3IDEyLjI3NDkgMTEuNDc5NSAxMS42NjU1IDEyLjA4ODlDMTEuMDYwNCAxMi42OTgyIDEwLjM1NzkgMTMuMTc0MyA5LjU1ODExIDEzLjUxNzFDOC43NTgzIDEzLjg2NDEgNy45MDU2IDE0LjAzNzYgNyAxNC4wMzc2Wk03IDEyLjU4NEM3LjcxNTE3IDEyLjU4NCA4LjM4Mzc5IDEyLjQ1MDcgOS4wMDU4NiAxMi4xODQxQzkuNjMyMTYgMTEuOTE3NSAxMC4xODIzIDExLjU0OTMgMTAuNjU2MiAxMS4wNzk2QzExLjEzMDIgMTAuNjA1NiAxMS41MDA1IDEwLjA1NzYgMTEuNzY3MSA5LjQzNTU1QzEyLjAzMzcgOC44MDkyNCAxMi4xNjcgOC4xMzYzOSAxMi4xNjcgNy40MTY5OUMxMi4xNjcgNi43MDE4MiAxMi4wMzE2IDYuMDMzMiAxMS43NjA3IDUuNDExMTNDMTEuNDk0MSA0Ljc4NDgzIDExLjEyMzkgNC4yMzQ3IDEwLjY0OTkgMy43NjA3NEMxMC4xODAyIDMuMjg2NzggOS42MzIxNiAyLjkxNjUgOS4wMDU4NiAyLjY0OTlDOC4zODM3OSAyLjM4MzMgNy43MTMwNSAyLjI1IDYuOTkzNjUgMi4yNUM2LjI3ODQ4IDIuMjUgNS42MDc3NSAyLjM4MzMgNC45ODE0NSAyLjY0OTlDNC4zNTkzOCAyLjkxNjUgMy44MTEzNiAzLjI4Njc4IDMuMzM3NCAzLjc2MDc0QzIuODY3NjggNC4yMzQ3IDIuNDk5NTEgNC43ODQ4MyAyLjIzMjkxIDUuNDExMTNDMS45NzA1NCA2LjAzMzIgMS44MzkzNiA2LjcwMTgyIDEuODM5MzYgNy40MTY5OUMxLjgzOTM2IDguMTM2MzkgMS45NzA1NCA4LjgwOTI0IDIuMjMyOTEgOS40MzU1NUMyLjQ5OTUxIDEwLjA1NzYgMi44Njk3OSAxMC42MDU2IDMuMzQzNzUgMTEuMDc5NkMzLjgxNzcxIDExLjU0OTMgNC4zNjU3MiAxMS45MTc1IDQuOTg3NzkgMTIuMTg0MUM1LjYxNDEgMTIuNDUwNyA2LjI4NDgzIDEyLjU4NCA3IDEyLjU4NFpNMTEuMTUxNCAxMS42MTI4QzEwLjczNjcgMTEuOTY4MyAxMC4yODM5IDEyLjI2NjYgOS43OTI5NyAxMi41MDc4QzkuMzA2MzIgMTIuNzUzMyA4LjgxOTY2IDEyLjkzNzMgOC4zMzMwMSAxMy4wNjAxQzcuODQ2MzUgMTMuMTg3IDcuNDAyMDIgMTMuMjUwNSA3IDEzLjI1MDVDNi42MDY0NSAxMy4yNTA1IDYuMTY0MjMgMTMuMTg3IDUuNjczMzQgMTMuMDYwMUM1LjE4NjY5IDEyLjkzNzMgNC42OTc5MiAxMi43NTMzIDQuMjA3MDMgMTIuNTA3OEMzLjcxNjE1IDEyLjI2NjYgMy4yNjU0NiAxMS45NjgzIDIuODU0OTggMTEuNjEyOEwyLjg4MDM3IDExLjQ3MzFDMy4wMzY5NSAxMS4xNjQyIDMuMzA1NjYgMTAuODcwMSAzLjY4NjUyIDEwLjU5MDhDNC4wNjczOCAxMC4zMDczIDQuNTM5MjMgMTAuMDc2NyA1LjEwMjA1IDkuODk4OTNDNS42NjQ4OCA5LjcyMTE5IDYuMjk3NTMgOS42MzIzMiA3IDkuNjMyMzJDNy43MTA5NCA5LjYzMjMyIDguMzQ3ODIgOS43MjExOSA4LjkxMDY0IDkuODk4OTNDOS40NzM0NyAxMC4wNzY3IDkuOTQzMiAxMC4zMDczIDEwLjMxOTggMTAuNTkwOEMxMC43MDA3IDEwLjg3MDEgMTAuOTY5NCAxMS4xNjYzIDExLjEyNiAxMS40Nzk1TDExLjE1MTQgMTEuNjEyOFpNNyA4LjYxMDM1QzYuNTg5NTIgOC42MDYxMiA2LjIxOTI0IDguNDk4MjEgNS44ODkxNiA4LjI4NjYyQzUuNTU5MDggOC4wNzUwMyA1LjI5NjcxIDcuNzg5MzkgNS4xMDIwNSA3LjQyOTY5QzQuOTExNjIgNy4wNjU3NiA0LjgxNDI5IDYuNjU3MzkgNC44MTAwNiA2LjIwNDU5QzQuODA1ODMgNS43NzcxOCA0LjkwMTA0IDUuMzg1NzQgNS4wOTU3IDUuMDMwMjdDNS4yOTQ2IDQuNjc0OCA1LjU1OTA4IDQuMzg5MTYgNS44ODkxNiA0LjE3MzM0QzYuMjIzNDcgMy45NTc1MiA2LjU5Mzc1IDMuODQ5NjEgNyAzLjg0OTYxQzcuNDEwNDggMy44NDk2MSA3Ljc4MDc2IDMuOTU3NTIgOC4xMTA4NCA0LjE3MzM0QzguNDQwOTIgNC4zODkxNiA4LjcwMzI5IDQuNjc0OCA4Ljg5Nzk1IDUuMDMwMjdDOS4wOTY4NCA1LjM4NTc0IDkuMTk2MjkgNS43NzcxOCA5LjE5NjI5IDYuMjA0NTlDOS4xOTYyOSA2LjY1NzM5IDkuMDk4OTYgNy4wNjU3NiA4LjkwNDMgNy40Mjk2OUM4LjcwOTY0IDcuNzkzNjIgOC40NDcyNyA4LjA4MzUgOC4xMTcxOSA4LjI5OTMyQzcuNzg3MTEgOC41MTA5IDcuNDE0NzEgOC42MTQ1OCA3IDguNjEwMzVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNyAxNC4wMzc2QzYuMDk0NCAxNC4wMzc2IDUuMjQxNyAxMy44NjQxIDQuNDQxODkgMTMuNTE3MUMzLjY0MjA5IDEzLjE3NDMgMi45Mzc1IDEyLjY5ODIgMi4zMjgxMiAxMi4wODg5QzEuNzE4NzUgMTEuNDc5NSAxLjI0MDU2IDEwLjc3NyAwLjg5MzU1NSA5Ljk4MTQ1QzAuNTUwNzgxIDkuMTgxNjQgMC4zNzkzOTUgOC4zMjY4MiAwLjM3OTM5NSA3LjQxNjk5QzAuMzc5Mzk1IDYuNTExMzkgMC41NTA3ODEgNS42NjA4MSAwLjg5MzU1NSA0Ljg2NTIzQzEuMjQwNTYgNC4wNjU0MyAxLjcxNjYzIDMuMzYwODQgMi4zMjE3OCAyLjc1MTQ2QzIuOTMxMTUgMi4xNDIwOSAzLjYzNTc0IDEuNjY2MDIgNC40MzU1NSAxLjMyMzI0QzUuMjM1MzUgMC45NzYyMzcgNi4wODgwNSAwLjgwMjczNCA2Ljk5MzY1IDAuODAyNzM0QzcuODk5MjUgMC44MDI3MzQgOC43NTE5NSAwLjk3NjIzNyA5LjU1MTc2IDEuMzIzMjRDMTAuMzU1OCAxLjY2NjAyIDExLjA2MDQgMi4xNDIwOSAxMS42NjU1IDIuNzUxNDZDMTIuMjc0OSAzLjM2MDg0IDEyLjc1MzEgNC4wNjU0MyAxMy4xMDAxIDQuODY1MjNDMTMuNDQ3MSA1LjY2MDgxIDEzLjYyMDYgNi41MTEzOSAxMy42MjA2IDcuNDE2OTlDMTMuNjIwNiA4LjMyNjgyIDEzLjQ0NzEgOS4xODE2NCAxMy4xMDAxIDkuOTgxNDVDMTIuNzUzMSAxMC43NzcgMTIuMjc0OSAxMS40Nzk1IDExLjY2NTUgMTIuMDg4OUMxMS4wNjA0IDEyLjY5ODIgMTAuMzU3OSAxMy4xNzQzIDkuNTU4MTEgMTMuNTE3MUM4Ljc1ODMgMTMuODY0MSA3LjkwNTYgMTQuMDM3NiA3IDE0LjAzNzZaTTcgMTIuNTg0QzcuNzE1MTcgMTIuNTg0IDguMzgzNzkgMTIuNDUwNyA5LjAwNTg2IDEyLjE4NDFDOS42MzIxNiAxMS45MTc1IDEwLjE4MjMgMTEuNTQ5MyAxMC42NTYyIDExLjA3OTZDMTEuMTMwMiAxMC42MDU2IDExLjUwMDUgMTAuMDU3NiAxMS43NjcxIDkuNDM1NTVDMTIuMDMzNyA4LjgwOTI0IDEyLjE2NyA4LjEzNjM5IDEyLjE2NyA3LjQxNjk5QzEyLjE2NyA2LjcwMTgyIDEyLjAzMTYgNi4wMzMyIDExLjc2MDcgNS40MTExM0MxMS40OTQxIDQuNzg0ODMgMTEuMTIzOSA0LjIzNDcgMTAuNjQ5OSAzLjc2MDc0QzEwLjE4MDIgMy4yODY3OCA5LjYzMjE2IDIuOTE2NSA5LjAwNTg2IDIuNjQ5OUM4LjM4Mzc5IDIuMzgzMyA3LjcxMzA1IDIuMjUgNi45OTM2NSAyLjI1QzYuMjc4NDggMi4yNSA1LjYwNzc1IDIuMzgzMyA0Ljk4MTQ1IDIuNjQ5OUM0LjM1OTM4IDIuOTE2NSAzLjgxMTM2IDMuMjg2NzggMy4zMzc0IDMuNzYwNzRDMi44Njc2OCA0LjIzNDcgMi40OTk1MSA0Ljc4NDgzIDIuMjMyOTEgNS40MTExM0MxLjk3MDU0IDYuMDMzMiAxLjgzOTM2IDYuNzAxODIgMS44MzkzNiA3LjQxNjk5QzEuODM5MzYgOC4xMzYzOSAxLjk3MDU0IDguODA5MjQgMi4yMzI5MSA5LjQzNTU1QzIuNDk5NTEgMTAuMDU3NiAyLjg2OTc5IDEwLjYwNTYgMy4zNDM3NSAxMS4wNzk2QzMuODE3NzEgMTEuNTQ5MyA0LjM2NTcyIDExLjkxNzUgNC45ODc3OSAxMi4xODQxQzUuNjE0MSAxMi40NTA3IDYuMjg0ODMgMTIuNTg0IDcgMTIuNTg0Wk0xMS4xNTE0IDExLjYxMjhDMTAuNzM2NyAxMS45NjgzIDEwLjI4MzkgMTIuMjY2NiA5Ljc5Mjk3IDEyLjUwNzhDOS4zMDYzMiAxMi43NTMzIDguODE5NjYgMTIuOTM3MyA4LjMzMzAxIDEzLjA2MDFDNy44NDYzNSAxMy4xODcgNy40MDIwMiAxMy4yNTA1IDcgMTMuMjUwNUM2LjYwNjQ1IDEzLjI1MDUgNi4xNjQyMyAxMy4xODcgNS42NzMzNCAxMy4wNjAxQzUuMTg2NjkgMTIuOTM3MyA0LjY5NzkyIDEyLjc1MzMgNC4yMDcwMyAxMi41MDc4QzMuNzE2MTUgMTIuMjY2NiAzLjI2NTQ2IDExLjk2ODMgMi44NTQ5OCAxMS42MTI4TDIuODgwMzcgMTEuNDczMUMzLjAzNjk1IDExLjE2NDIgMy4zMDU2NiAxMC44NzAxIDMuNjg2NTIgMTAuNTkwOEM0LjA2NzM4IDEwLjMwNzMgNC41MzkyMyAxMC4wNzY3IDUuMTAyMDUgOS44OTg5M0M1LjY2NDg4IDkuNzIxMTkgNi4yOTc1MyA5LjYzMjMyIDcgOS42MzIzMkM3LjcxMDk0IDkuNjMyMzIgOC4zNDc4MiA5LjcyMTE5IDguOTEwNjQgOS44OTg5M0M5LjQ3MzQ3IDEwLjA3NjcgOS45NDMyIDEwLjMwNzMgMTAuMzE5OCAxMC41OTA4QzEwLjcwMDcgMTAuODcwMSAxMC45Njk0IDExLjE2NjMgMTEuMTI2IDExLjQ3OTVMMTEuMTUxNCAxMS42MTI4Wk03IDguNjEwMzVDNi41ODk1MiA4LjYwNjEyIDYuMjE5MjQgOC40OTgyMSA1Ljg4OTE2IDguMjg2NjJDNS41NTkwOCA4LjA3NTAzIDUuMjk2NzEgNy43ODkzOSA1LjEwMjA1IDcuNDI5NjlDNC45MTE2MiA3LjA2NTc2IDQuODE0MjkgNi42NTczOSA0LjgxMDA2IDYuMjA0NTlDNC44MDU4MyA1Ljc3NzE4IDQuOTAxMDQgNS4zODU3NCA1LjA5NTcgNS4wMzAyN0M1LjI5NDYgNC42NzQ4IDUuNTU5MDggNC4zODkxNiA1Ljg4OTE2IDQuMTczMzRDNi4yMjM0NyAzLjk1NzUyIDYuNTkzNzUgMy44NDk2MSA3IDMuODQ5NjFDNy40MTA0OCAzLjg0OTYxIDcuNzgwNzYgMy45NTc1MiA4LjExMDg0IDQuMTczMzRDOC40NDA5MiA0LjM4OTE2IDguNzAzMjkgNC42NzQ4IDguODk3OTUgNS4wMzAyN0M5LjA5Njg0IDUuMzg1NzQgOS4xOTYyOSA1Ljc3NzE4IDkuMTk2MjkgNi4yMDQ1OUM5LjE5NjI5IDYuNjU3MzkgOS4wOTg5NiA3LjA2NTc2IDguOTA0MyA3LjQyOTY5QzguNzA5NjQgNy43OTM2MiA4LjQ0NzI3IDguMDgzNSA4LjExNzE5IDguMjk5MzJDNy43ODcxMSA4LjUxMDkgNy40MTQ3MSA4LjYxNDU4IDcgOC42MTAzNVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=',
	"wifi": 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTAuODMxNUM3LjkxNTM2IDEwLjgzMTUgNy44MzA3MyAxMC44MDgzIDcuNzQ2MDkgMTAuNzYxN0M3LjY2NTY5IDEwLjcxNTIgNy41NjIwMSAxMC42Mjg0IDcuNDM1MDYgMTAuNTAxNUw1Ljg2NzE5IDguOTk3MDdDNS44MDc5NCA4LjkzNzgzIDUuNzY5ODYgOC44NzQzNSA1Ljc1MjkzIDguODA2NjRDNS43NDAyMyA4LjczNDcgNS43NTI5MyA4LjY2Njk5IDUuNzkxMDIgOC42MDM1MkM2LjAyMzc2IDguMjk0NiA2LjMzNDggOC4wMzY0NiA2LjcyNDEyIDcuODI5MUM3LjExNzY4IDcuNjE3NTEgNy41NDI5NyA3LjUxMTcyIDggNy41MTE3MkM4LjQ0NDM0IDcuNTExNzIgOC44NTkwNSA3LjYxMTE3IDkuMjQ0MTQgNy44MTAwNkM5LjYyOTIzIDguMDA4OTUgOS45MzgxNSA4LjI1NDM5IDEwLjE3MDkgOC41NDYzOUMxMC4yMzAxIDguNjE4MzMgMTAuMjUzNCA4LjY5NjYxIDEwLjI0MDcgOC43ODEyNUMxMC4yMzIzIDguODY1ODkgMTAuMTk2MyA4LjkzNzgzIDEwLjEzMjggOC45OTcwN0w4LjU2NDk0IDEwLjUwMTVDOC40Mzc5OSAxMC42Mjg0IDguMzMyMTkgMTAuNzE1MiA4LjI0NzU2IDEwLjc2MTdDOC4xNjcxNSAxMC44MDgzIDguMDg0NjQgMTAuODMxNSA4IDEwLjgzMTVaTTQuMTk3NzUgNy4yNzY4NkwzLjE4ODQ4IDYuMjkyOTdDMy4xMjUgNi4yMjk0OSAzLjA5MTE1IDYuMTU5NjcgMy4wODY5MSA2LjA4MzVDMy4wODI2OCA2LjAwMzA5IDMuMTA4MDcgNS45MjkwNCAzLjE2MzA5IDUuODYxMzNDMy41MDE2MyA1LjQ1OTMxIDMuOTIwNTcgNS4xMDM4NCA0LjQxOTkyIDQuNzk0OTJDNC45MTkyNyA0LjQ4MTc3IDUuNDczNjMgNC4yMzYzMyA2LjA4MzAxIDQuMDU4NTlDNi42OTY2MSAzLjg4MDg2IDcuMzM1NjEgMy43OTE5OSA4IDMuNzkxOTlDOC42NjQzOSAzLjc5MTk5IDkuMzAxMjcgMy44ODA4NiA5LjkxMDY0IDQuMDU4NTlDMTAuNTIgNC4yMzYzMyAxMS4wNzQ0IDQuNDgxNzcgMTEuNTczNyA0Ljc5NDkyQzEyLjA3NzMgNS4xMDM4NCAxMi40OTYzIDUuNDU5MzEgMTIuODMwNiA1Ljg2MTMzQzEyLjg4OTggNS45MjkwNCAxMi45MTUyIDYuMDAzMDkgMTIuOTA2NyA2LjA4MzVDMTIuOTAyNSA2LjE2MzkgMTIuODY4NyA2LjIzMzcyIDEyLjgwNTIgNi4yOTI5N0wxMS43OTU5IDcuMjc2ODZDMTEuNzE1NSA3LjM1MzAzIDExLjYyODcgNy4zOTExMSAxMS41MzU2IDcuMzkxMTFDMTEuNDQ2OCA3LjM5MTExIDExLjM2NjQgNy4zNTMwMyAxMS4yOTQ0IDcuMjc2ODZDMTAuODkyNCA2Ljg0OTQ1IDEwLjM5OTQgNi41MDAzMyA5LjgxNTQzIDYuMjI5NDlDOS4yMzU2OCA1Ljk1ODY2IDguNjMwNTMgNS44MjUzNiA4IDUuODI5NTlDNy4zNzc5MyA1LjgyNTM2IDYuNzc0OSA1Ljk1NjU0IDYuMTkwOTIgNi4yMjMxNEM1LjYxMTE3IDYuNDg1NTEgNS4xMjQ1MSA2LjgyODI5IDQuNzMwOTYgNy4yNTE0NkM0LjY1NDc5IDcuMzM2MSA0LjU2NTkyIDcuMzgyNjUgNC40NjQzNiA3LjM5MTExQzQuMzY3MDIgNy4zOTUzNSA0LjI3ODE2IDcuMzU3MjYgNC4xOTc3NSA3LjI3Njg2Wk0xLjUzMTc0IDQuNjQyNThMMC42MzY3MTkgMy43Mjg1MkMwLjU3MzI0MiAzLjY2MDgxIDAuNTM5Mzg4IDMuNTg2NzUgMC41MzUxNTYgMy41MDYzNUMwLjUzMDkyNCAzLjQyMTcxIDAuNTU2MzE1IDMuMzQ3NjYgMC42MTEzMjggMy4yODQxOEMxLjEyMzM3IDIuNjQ1MTggMS43Njg3MiAyLjA4MDI0IDIuNTQ3MzYgMS41ODkzNkMzLjMyNjAxIDEuMDk0MjQgNC4xODA4MyAwLjcwOTE0NyA1LjExMTgyIDAuNDM0MDgyQzYuMDQ3MDQgMC4xNTQ3ODUgNy4wMDk3NyAwLjAxNTEzNjcgOCAwLjAxNTEzNjdDOC45ODYgMC4wMTUxMzY3IDkuOTQ2NjEgMC4xNTQ3ODUgMTAuODgxOCAwLjQzNDA4MkMxMS44MTcxIDAuNzEzMzc5IDEyLjY3MTkgMS4wOTg0NyAxMy40NDYzIDEuNTg5MzZDMTQuMjI0OSAyLjA4MDI0IDE0Ljg3MDMgMi42NDUxOCAxNS4zODIzIDMuMjg0MThDMTUuNDQxNiAzLjM0NzY2IDE1LjQ2OTEgMy40MjE3MSAxNS40NjQ4IDMuNTA2MzVDMTUuNDY0OCAzLjU4Njc1IDE1LjQzMSAzLjY2MDgxIDE1LjM2MzMgMy43Mjg1MkwxNC40NjE5IDQuNjI5ODhDMTQuMzkgNC43MDE4MiAxNC4zMDUzIDQuNzM5OTEgMTQuMjA4IDQuNzQ0MTRDMTQuMTEwNyA0Ljc0ODM3IDE0LjAyNiA0LjcxNDUyIDEzLjk1NDEgNC42NDI1OEMxMy4xNzU1IDMuODA0NjkgMTIuMjc4MyAzLjE2OTkyIDExLjI2MjcgMi43MzgyOEMxMC4yNTEzIDIuMzAyNDEgOS4xNjM3NCAyLjA4NDQ3IDggMi4wODQ0N0M2Ljg0NDczIDIuMDg0NDcgNS43NjEzOSAyLjMwMjQxIDQuNzUgMi43MzgyOEMzLjczODYxIDMuMTY5OTIgMi44MzkzNiAzLjgwMjU3IDIuMDUyMjUgNC42MzYyM0MxLjk4MDMxIDQuNzEyNCAxLjg5MzU1IDQuNzUyNiAxLjc5MTk5IDQuNzU2ODRDMS42OTQ2NiA0Ljc1Njg0IDEuNjA3OTEgNC43MTg3NSAxLjUzMTc0IDQuNjQyNThaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAxMC44MzE1QzcuOTE1MzYgMTAuODMxNSA3LjgzMDczIDEwLjgwODMgNy43NDYwOSAxMC43NjE3QzcuNjY1NjkgMTAuNzE1MiA3LjU2MjAxIDEwLjYyODQgNy40MzUwNiAxMC41MDE1TDUuODY3MTkgOC45OTcwN0M1LjgwNzk0IDguOTM3ODMgNS43Njk4NiA4Ljg3NDM1IDUuNzUyOTMgOC44MDY2NEM1Ljc0MDIzIDguNzM0NyA1Ljc1MjkzIDguNjY2OTkgNS43OTEwMiA4LjYwMzUyQzYuMDIzNzYgOC4yOTQ2IDYuMzM0OCA4LjAzNjQ2IDYuNzI0MTIgNy44MjkxQzcuMTE3NjggNy42MTc1MSA3LjU0Mjk3IDcuNTExNzIgOCA3LjUxMTcyQzguNDQ0MzQgNy41MTE3MiA4Ljg1OTA1IDcuNjExMTcgOS4yNDQxNCA3LjgxMDA2QzkuNjI5MjMgOC4wMDg5NSA5LjkzODE1IDguMjU0MzkgMTAuMTcwOSA4LjU0NjM5QzEwLjIzMDEgOC42MTgzMyAxMC4yNTM0IDguNjk2NjEgMTAuMjQwNyA4Ljc4MTI1QzEwLjIzMjMgOC44NjU4OSAxMC4xOTYzIDguOTM3ODMgMTAuMTMyOCA4Ljk5NzA3TDguNTY0OTQgMTAuNTAxNUM4LjQzNzk5IDEwLjYyODQgOC4zMzIxOSAxMC43MTUyIDguMjQ3NTYgMTAuNzYxN0M4LjE2NzE1IDEwLjgwODMgOC4wODQ2NCAxMC44MzE1IDggMTAuODMxNVpNNC4xOTc3NSA3LjI3Njg2TDMuMTg4NDggNi4yOTI5N0MzLjEyNSA2LjIyOTQ5IDMuMDkxMTUgNi4xNTk2NyAzLjA4NjkxIDYuMDgzNUMzLjA4MjY4IDYuMDAzMDkgMy4xMDgwNyA1LjkyOTA0IDMuMTYzMDkgNS44NjEzM0MzLjUwMTYzIDUuNDU5MzEgMy45MjA1NyA1LjEwMzg0IDQuNDE5OTIgNC43OTQ5MkM0LjkxOTI3IDQuNDgxNzcgNS40NzM2MyA0LjIzNjMzIDYuMDgzMDEgNC4wNTg1OUM2LjY5NjYxIDMuODgwODYgNy4zMzU2MSAzLjc5MTk5IDggMy43OTE5OUM4LjY2NDM5IDMuNzkxOTkgOS4zMDEyNyAzLjg4MDg2IDkuOTEwNjQgNC4wNTg1OUMxMC41MiA0LjIzNjMzIDExLjA3NDQgNC40ODE3NyAxMS41NzM3IDQuNzk0OTJDMTIuMDc3MyA1LjEwMzg0IDEyLjQ5NjMgNS40NTkzMSAxMi44MzA2IDUuODYxMzNDMTIuODg5OCA1LjkyOTA0IDEyLjkxNTIgNi4wMDMwOSAxMi45MDY3IDYuMDgzNUMxMi45MDI1IDYuMTYzOSAxMi44Njg3IDYuMjMzNzIgMTIuODA1MiA2LjI5Mjk3TDExLjc5NTkgNy4yNzY4NkMxMS43MTU1IDcuMzUzMDMgMTEuNjI4NyA3LjM5MTExIDExLjUzNTYgNy4zOTExMUMxMS40NDY4IDcuMzkxMTEgMTEuMzY2NCA3LjM1MzAzIDExLjI5NDQgNy4yNzY4NkMxMC44OTI0IDYuODQ5NDUgMTAuMzk5NCA2LjUwMDMzIDkuODE1NDMgNi4yMjk0OUM5LjIzNTY4IDUuOTU4NjYgOC42MzA1MyA1LjgyNTM2IDggNS44Mjk1OUM3LjM3NzkzIDUuODI1MzYgNi43NzQ5IDUuOTU2NTQgNi4xOTA5MiA2LjIyMzE0QzUuNjExMTcgNi40ODU1MSA1LjEyNDUxIDYuODI4MjkgNC43MzA5NiA3LjI1MTQ2QzQuNjU0NzkgNy4zMzYxIDQuNTY1OTIgNy4zODI2NSA0LjQ2NDM2IDcuMzkxMTFDNC4zNjcwMiA3LjM5NTM1IDQuMjc4MTYgNy4zNTcyNiA0LjE5Nzc1IDcuMjc2ODZaTTEuNTMxNzQgNC42NDI1OEwwLjYzNjcxOSAzLjcyODUyQzAuNTczMjQyIDMuNjYwODEgMC41MzkzODggMy41ODY3NSAwLjUzNTE1NiAzLjUwNjM1QzAuNTMwOTI0IDMuNDIxNzEgMC41NTYzMTUgMy4zNDc2NiAwLjYxMTMyOCAzLjI4NDE4QzEuMTIzMzcgMi42NDUxOCAxLjc2ODcyIDIuMDgwMjQgMi41NDczNiAxLjU4OTM2QzMuMzI2MDEgMS4wOTQyNCA0LjE4MDgzIDAuNzA5MTQ3IDUuMTExODIgMC40MzQwODJDNi4wNDcwNCAwLjE1NDc4NSA3LjAwOTc3IDAuMDE1MTM2NyA4IDAuMDE1MTM2N0M4Ljk4NiAwLjAxNTEzNjcgOS45NDY2MSAwLjE1NDc4NSAxMC44ODE4IDAuNDM0MDgyQzExLjgxNzEgMC43MTMzNzkgMTIuNjcxOSAxLjA5ODQ3IDEzLjQ0NjMgMS41ODkzNkMxNC4yMjQ5IDIuMDgwMjQgMTQuODcwMyAyLjY0NTE4IDE1LjM4MjMgMy4yODQxOEMxNS40NDE2IDMuMzQ3NjYgMTUuNDY5MSAzLjQyMTcxIDE1LjQ2NDggMy41MDYzNUMxNS40NjQ4IDMuNTg2NzUgMTUuNDMxIDMuNjYwODEgMTUuMzYzMyAzLjcyODUyTDE0LjQ2MTkgNC42Mjk4OEMxNC4zOSA0LjcwMTgyIDE0LjMwNTMgNC43Mzk5MSAxNC4yMDggNC43NDQxNEMxNC4xMTA3IDQuNzQ4MzcgMTQuMDI2IDQuNzE0NTIgMTMuOTU0MSA0LjY0MjU4QzEzLjE3NTUgMy44MDQ2OSAxMi4yNzgzIDMuMTY5OTIgMTEuMjYyNyAyLjczODI4QzEwLjI1MTMgMi4zMDI0MSA5LjE2Mzc0IDIuMDg0NDcgOCAyLjA4NDQ3QzYuODQ0NzMgMi4wODQ0NyA1Ljc2MTM5IDIuMzAyNDEgNC43NSAyLjczODI4QzMuNzM4NjEgMy4xNjk5MiAyLjgzOTM2IDMuODAyNTcgMi4wNTIyNSA0LjYzNjIzQzEuOTgwMzEgNC43MTI0IDEuODkzNTUgNC43NTI2IDEuNzkxOTkgNC43NTY4NEMxLjY5NDY2IDQuNzU2ODQgMS42MDc5MSA0LjcxODc1IDEuNTMxNzQgNC42NDI1OFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=',
	"control-center": 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjkyODcgMTIuNzEzOUMzLjE1NTQ0IDEyLjcxMzkgMi42Njg3OCAxMi41OTU0IDIuMjMyOTEgMTIuMzU4NEMxLjgwMTI3IDEyLjEyNTcgMS40NTYzOCAxMS44MDE5IDEuMTk4MjQgMTEuMzg3MkMwLjk0NDMzNiAxMC45NzI1IDAuODE3MzgzIDEwLjQ5MjIgMC44MTczODMgOS45NDYyOUMwLjgxNzM4MyA5LjQwMDM5IDAuOTQ0MzM2IDguOTIwMDggMS4xOTgyNCA4LjUwNTM3QzEuNDU2MzggOC4wOTA2NiAxLjgwMTI3IDcuNzY2OTMgMi4yMzI5MSA3LjUzNDE4QzIuNjY4NzggNy4yOTcyIDMuMTU1NDQgNy4xNzg3MSAzLjY5Mjg3IDcuMTc4NzFIMTAuMzAwOEMxMC44MzgyIDcuMTc4NzEgMTEuMzIyOCA3LjI5NzIgMTEuNzU0NCA3LjUzNDE4QzEyLjE5MDMgNy43NjY5MyAxMi41MzUyIDguMDkwNjYgMTIuNzg5MSA4LjUwNTM3QzEzLjA0NzIgOC45MjAwOCAxMy4xNzYzIDkuNDAwMzkgMTMuMTc2MyA5Ljk0NjI5QzEzLjE3NjMgMTAuNDkyMiAxMy4wNDcyIDEwLjk3MjUgMTIuNzg5MSAxMS4zODcyQzEyLjUzNTIgMTEuODAxOSAxMi4xOTAzIDEyLjEyNTcgMTEuNzU0NCAxMi4zNTg0QzExLjMyMjggMTIuNTk1NCAxMC44MzgyIDEyLjcxMzkgMTAuMzAwOCAxMi43MTM5SDMuNjkyODdaTTEwLjQ2NTggMTEuNDYzNEMxMC43NDA5IDExLjQ2MzQgMTAuOTkyNyAxMS4zOTM2IDExLjIyMTIgMTEuMjUzOUMxMS40NDk3IDExLjExODUgMTEuNjMxNyAxMC45MzQ0IDExLjc2NzEgMTAuNzAxN0MxMS45MDY3IDEwLjQ2ODkgMTEuOTc4NyAxMC4yMTA4IDExLjk4MjkgOS45MjcyNUMxMS45ODI5IDkuNjUyMTggMTEuOTE1MiA5LjQwMjUxIDExLjc3OTggOS4xNzgyMkMxMS42NDQ0IDguOTQ5NzEgMTEuNDYwMyA4Ljc2Nzc0IDExLjIyNzUgOC42MzIzMkMxMC45OTkgOC40OTY5MSAxMC43NDUxIDguNDI5MiAxMC40NjU4IDguNDI5MkMxMC4xODY1IDguNDI5MiA5LjkzMjYyIDguNDk2OTEgOS43MDQxIDguNjMyMzJDOS40NzU1OSA4Ljc2Nzc0IDkuMjkzNjIgOC45NDk3MSA5LjE1ODIgOS4xNzgyMkM5LjAyMjc5IDkuNDA2NzQgOC45NTUwOCA5LjY2MDY0IDguOTU1MDggOS45Mzk5NEM4Ljk1NTA4IDEwLjIxOTIgOS4wMjI3OSAxMC40NzMxIDkuMTU4MiAxMC43MDE3QzkuMjkzNjIgMTAuOTMwMiA5LjQ3NTU5IDExLjExMjEgOS43MDQxIDExLjI0NzZDOS45MzI2MiAxMS4zODcyIDEwLjE4NjUgMTEuNDU5MSAxMC40NjU4IDExLjQ2MzRaTTMuOTUzMTIgNi4yMDc1MkMzLjM2MDY4IDYuMjA3NTIgMi44Mjc0NyA2LjA4MDU3IDIuMzUzNTIgNS44MjY2NkMxLjg3OTU2IDUuNTcyNzUgMS41MDUwNSA1LjIxNzI5IDEuMjI5OTggNC43NjAyNUMwLjk1NDkxNSA0LjI5ODk5IDAuODE3MzgzIDMuNzY1NzkgMC44MTczODMgMy4xNjA2NEMwLjgxNzM4MyAyLjU1MTI3IDAuOTU0OTE1IDIuMDE4MDcgMS4yMjk5OCAxLjU2MTA0QzEuNTA1MDUgMS4wOTk3NyAxLjg3OTU2IDAuNzQyMTg4IDIuMzUzNTIgMC40ODgyODFDMi44Mjc0NyAwLjIzNDM3NSAzLjM2MDY4IDAuMTA3NDIyIDMuOTUzMTIgMC4xMDc0MjJIMTAuMDQwNUMxMC42MzMgMC4xMDc0MjIgMTEuMTY2MiAwLjIzNDM3NSAxMS42NDAxIDAuNDg4MjgxQzEyLjExNDEgMC43NDIxODggMTIuNDg4NiAxLjA5OTc3IDEyLjc2MzcgMS41NjEwNEMxMy4wMzg3IDIuMDE4MDcgMTMuMTc2MyAyLjU1MTI3IDEzLjE3NjMgMy4xNjA2NEMxMy4xNzYzIDMuNzY1NzkgMTMuMDM4NyA0LjI5ODk5IDEyLjc2MzcgNC43NjAyNUMxMi40ODg2IDUuMjE3MjkgMTIuMTE0MSA1LjU3Mjc1IDExLjY0MDEgNS44MjY2NkMxMS4xNjYyIDYuMDgwNTcgMTAuNjMzIDYuMjA3NTIgMTAuMDQwNSA2LjIwNzUySDMuOTUzMTJaTTMuOTUzMTIgNC45MzE2NEgxMC4wNDA1QzEwLjM3OTEgNC45MzE2NCAxMC42ODggNC44NTc1OCAxMC45NjczIDQuNzA5NDdDMTEuMjUwOCA0LjU1NzEzIDExLjQ3NzIgNC4zNDc2NiAxMS42NDY1IDQuMDgxMDVDMTEuODE1OCAzLjgxNDQ1IDExLjkwMDQgMy41MDc2NSAxMS45MDA0IDMuMTYwNjRDMTEuOTAwNCAyLjgwOTQxIDExLjgxNTggMi41MDI2IDExLjY0NjUgMi4yNDAyM0MxMS40NzcyIDEuOTczNjMgMTEuMjUwOCAxLjc2NjI4IDEwLjk2NzMgMS42MTgxNkMxMC42ODggMS40NjU4MiAxMC4zNzkxIDEuMzg5NjUgMTAuMDQwNSAxLjM4OTY1SDMuOTUzMTJDMy42MTQ1OCAxLjM4OTY1IDMuMzAzNTUgMS40NjU4MiAzLjAyMDAyIDEuNjE4MTZDMi43NDA3MiAxLjc2NjI4IDIuNTE2NDQgMS45NzM2MyAyLjM0NzE3IDIuMjQwMjNDMi4xNzc5IDIuNTAyNiAyLjA5MzI2IDIuODA5NDEgMi4wOTMyNiAzLjE2MDY0QzIuMDkzMjYgMy41MDc2NSAyLjE3NzkgMy44MTQ0NSAyLjM0NzE3IDQuMDgxMDVDMi41MTY0NCA0LjM0NzY2IDIuNzQwNzIgNC41NTcxMyAzLjAyMDAyIDQuNzA5NDdDMy4zMDM1NSA0Ljg1NzU4IDMuNjE0NTggNC45MzE2NCAzLjk1MzEyIDQuOTMxNjRaTTMuOTUzMTIgNC41MTkwNEMzLjY5OTIyIDQuNTE5MDQgMy40Njg1OSA0LjQ1NzY4IDMuMjYxMjMgNC4zMzQ5NkMzLjA1ODExIDQuMjEyMjQgMi44OTUxOCA0LjA0NzIgMi43NzI0NiAzLjgzOTg0QzIuNjUzOTcgMy42MzI0OSAyLjU5NDczIDMuNDAzOTcgMi41OTQ3MyAzLjE1NDNDMi41OTQ3MyAyLjkwNDYyIDIuNjUzOTcgMi42NzYxMSAyLjc3MjQ2IDIuNDY4NzVDMi44OTUxOCAyLjI2MTM5IDMuMDU4MTEgMi4wOTYzNSAzLjI2MTIzIDEuOTczNjNDMy40Njg1OSAxLjg1MDkxIDMuNjk5MjIgMS43ODk1NSAzLjk1MzEyIDEuNzg5NTVDNC4yMDcwMyAxLjc4OTU1IDQuNDM3NjYgMS44NTA5MSA0LjY0NTAyIDEuOTczNjNDNC44NTIzOCAyLjA5MjEyIDUuMDE3NDIgMi4yNTUwNSA1LjE0MDE0IDIuNDYyNEM1LjI2Mjg2IDIuNjY1NTMgNS4zMjIxIDIuODk0MDQgNS4zMTc4NyAzLjE0Nzk1QzUuMzE3ODcgMy40MDE4NiA1LjI1NjUxIDMuNjMyNDkgNS4xMzM3OSAzLjgzOTg0QzUuMDExMDcgNC4wNDcyIDQuODQ2MDMgNC4yMTQzNiA0LjYzODY3IDQuMzQxMzFDNC40MzU1NSA0LjQ2NDAzIDQuMjA3MDMgNC41MjMyNyAzLjk1MzEyIDQuNTE5MDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMy42OTI4NyAxMi43MTM5QzMuMTU1NDQgMTIuNzEzOSAyLjY2ODc4IDEyLjU5NTQgMi4yMzI5MSAxMi4zNTg0QzEuODAxMjcgMTIuMTI1NyAxLjQ1NjM4IDExLjgwMTkgMS4xOTgyNCAxMS4zODcyQzAuOTQ0MzM2IDEwLjk3MjUgMC44MTczODMgMTAuNDkyMiAwLjgxNzM4MyA5Ljk0NjI5QzAuODE3MzgzIDkuNDAwMzkgMC45NDQzMzYgOC45MjAwOCAxLjE5ODI0IDguNTA1MzdDMS40NTYzOCA4LjA5MDY2IDEuODAxMjcgNy43NjY5MyAyLjIzMjkxIDcuNTM0MThDMi42Njg3OCA3LjI5NzIgMy4xNTU0NCA3LjE3ODcxIDMuNjkyODcgNy4xNzg3MUgxMC4zMDA4QzEwLjgzODIgNy4xNzg3MSAxMS4zMjI4IDcuMjk3MiAxMS43NTQ0IDcuNTM0MThDMTIuMTkwMyA3Ljc2NjkzIDEyLjUzNTIgOC4wOTA2NiAxMi43ODkxIDguNTA1MzdDMTMuMDQ3MiA4LjkyMDA4IDEzLjE3NjMgOS40MDAzOSAxMy4xNzYzIDkuOTQ2MjlDMTMuMTc2MyAxMC40OTIyIDEzLjA0NzIgMTAuOTcyNSAxMi43ODkxIDExLjM4NzJDMTIuNTM1MiAxMS44MDE5IDEyLjE5MDMgMTIuMTI1NyAxMS43NTQ0IDEyLjM1ODRDMTEuMzIyOCAxMi41OTU0IDEwLjgzODIgMTIuNzEzOSAxMC4zMDA4IDEyLjcxMzlIMy42OTI4N1pNMTAuNDY1OCAxMS40NjM0QzEwLjc0MDkgMTEuNDYzNCAxMC45OTI3IDExLjM5MzYgMTEuMjIxMiAxMS4yNTM5QzExLjQ0OTcgMTEuMTE4NSAxMS42MzE3IDEwLjkzNDQgMTEuNzY3MSAxMC43MDE3QzExLjkwNjcgMTAuNDY4OSAxMS45Nzg3IDEwLjIxMDggMTEuOTgyOSA5LjkyNzI1QzExLjk4MjkgOS42NTIxOCAxMS45MTUyIDkuNDAyNTEgMTEuNzc5OCA5LjE3ODIyQzExLjY0NDQgOC45NDk3MSAxMS40NjAzIDguNzY3NzQgMTEuMjI3NSA4LjYzMjMyQzEwLjk5OSA4LjQ5NjkxIDEwLjc0NTEgOC40MjkyIDEwLjQ2NTggOC40MjkyQzEwLjE4NjUgOC40MjkyIDkuOTMyNjIgOC40OTY5MSA5LjcwNDEgOC42MzIzMkM5LjQ3NTU5IDguNzY3NzQgOS4yOTM2MiA4Ljk0OTcxIDkuMTU4MiA5LjE3ODIyQzkuMDIyNzkgOS40MDY3NCA4Ljk1NTA4IDkuNjYwNjQgOC45NTUwOCA5LjkzOTk0QzguOTU1MDggMTAuMjE5MiA5LjAyMjc5IDEwLjQ3MzEgOS4xNTgyIDEwLjcwMTdDOS4yOTM2MiAxMC45MzAyIDkuNDc1NTkgMTEuMTEyMSA5LjcwNDEgMTEuMjQ3NkM5LjkzMjYyIDExLjM4NzIgMTAuMTg2NSAxMS40NTkxIDEwLjQ2NTggMTEuNDYzNFpNMy45NTMxMiA2LjIwNzUyQzMuMzYwNjggNi4yMDc1MiAyLjgyNzQ3IDYuMDgwNTcgMi4zNTM1MiA1LjgyNjY2QzEuODc5NTYgNS41NzI3NSAxLjUwNTA1IDUuMjE3MjkgMS4yMjk5OCA0Ljc2MDI1QzAuOTU0OTE1IDQuMjk4OTkgMC44MTczODMgMy43NjU3OSAwLjgxNzM4MyAzLjE2MDY0QzAuODE3MzgzIDIuNTUxMjcgMC45NTQ5MTUgMi4wMTgwNyAxLjIyOTk4IDEuNTYxMDRDMS41MDUwNSAxLjA5OTc3IDEuODc5NTYgMC43NDIxODggMi4zNTM1MiAwLjQ4ODI4MUMyLjgyNzQ3IDAuMjM0Mzc1IDMuMzYwNjggMC4xMDc0MjIgMy45NTMxMiAwLjEwNzQyMkgxMC4wNDA1QzEwLjYzMyAwLjEwNzQyMiAxMS4xNjYyIDAuMjM0Mzc1IDExLjY0MDEgMC40ODgyODFDMTIuMTE0MSAwLjc0MjE4OCAxMi40ODg2IDEuMDk5NzcgMTIuNzYzNyAxLjU2MTA0QzEzLjAzODcgMi4wMTgwNyAxMy4xNzYzIDIuNTUxMjcgMTMuMTc2MyAzLjE2MDY0QzEzLjE3NjMgMy43NjU3OSAxMy4wMzg3IDQuMjk4OTkgMTIuNzYzNyA0Ljc2MDI1QzEyLjQ4ODYgNS4yMTcyOSAxMi4xMTQxIDUuNTcyNzUgMTEuNjQwMSA1LjgyNjY2QzExLjE2NjIgNi4wODA1NyAxMC42MzMgNi4yMDc1MiAxMC4wNDA1IDYuMjA3NTJIMy45NTMxMlpNMy45NTMxMiA0LjkzMTY0SDEwLjA0MDVDMTAuMzc5MSA0LjkzMTY0IDEwLjY4OCA0Ljg1NzU4IDEwLjk2NzMgNC43MDk0N0MxMS4yNTA4IDQuNTU3MTMgMTEuNDc3MiA0LjM0NzY2IDExLjY0NjUgNC4wODEwNUMxMS44MTU4IDMuODE0NDUgMTEuOTAwNCAzLjUwNzY1IDExLjkwMDQgMy4xNjA2NEMxMS45MDA0IDIuODA5NDEgMTEuODE1OCAyLjUwMjYgMTEuNjQ2NSAyLjI0MDIzQzExLjQ3NzIgMS45NzM2MyAxMS4yNTA4IDEuNzY2MjggMTAuOTY3MyAxLjYxODE2QzEwLjY4OCAxLjQ2NTgyIDEwLjM3OTEgMS4zODk2NSAxMC4wNDA1IDEuMzg5NjVIMy45NTMxMkMzLjYxNDU4IDEuMzg5NjUgMy4zMDM1NSAxLjQ2NTgyIDMuMDIwMDIgMS42MTgxNkMyLjc0MDcyIDEuNzY2MjggMi41MTY0NCAxLjk3MzYzIDIuMzQ3MTcgMi4yNDAyM0MyLjE3NzkgMi41MDI2IDIuMDkzMjYgMi44MDk0MSAyLjA5MzI2IDMuMTYwNjRDMi4wOTMyNiAzLjUwNzY1IDIuMTc3OSAzLjgxNDQ1IDIuMzQ3MTcgNC4wODEwNUMyLjUxNjQ0IDQuMzQ3NjYgMi43NDA3MiA0LjU1NzEzIDMuMDIwMDIgNC43MDk0N0MzLjMwMzU1IDQuODU3NTggMy42MTQ1OCA0LjkzMTY0IDMuOTUzMTIgNC45MzE2NFpNMy45NTMxMiA0LjUxOTA0QzMuNjk5MjIgNC41MTkwNCAzLjQ2ODU5IDQuNDU3NjggMy4yNjEyMyA0LjMzNDk2QzMuMDU4MTEgNC4yMTIyNCAyLjg5NTE4IDQuMDQ3MiAyLjc3MjQ2IDMuODM5ODRDMi42NTM5NyAzLjYzMjQ5IDIuNTk0NzMgMy40MDM5NyAyLjU5NDczIDMuMTU0M0MyLjU5NDczIDIuOTA0NjIgMi42NTM5NyAyLjY3NjExIDIuNzcyNDYgMi40Njg3NUMyLjg5NTE4IDIuMjYxMzkgMy4wNTgxMSAyLjA5NjM1IDMuMjYxMjMgMS45NzM2M0MzLjQ2ODU5IDEuODUwOTEgMy42OTkyMiAxLjc4OTU1IDMuOTUzMTIgMS43ODk1NUM0LjIwNzAzIDEuNzg5NTUgNC40Mzc2NiAxLjg1MDkxIDQuNjQ1MDIgMS45NzM2M0M0Ljg1MjM4IDIuMDkyMTIgNS4wMTc0MiAyLjI1NTA1IDUuMTQwMTQgMi40NjI0QzUuMjYyODYgMi42NjU1MyA1LjMyMjEgMi44OTQwNCA1LjMxNzg3IDMuMTQ3OTVDNS4zMTc4NyAzLjQwMTg2IDUuMjU2NTEgMy42MzI0OSA1LjEzMzc5IDMuODM5ODRDNS4wMTEwNyA0LjA0NzIgNC44NDYwMyA0LjIxNDM2IDQuNjM4NjcgNC4zNDEzMUM0LjQzNTU1IDQuNDY0MDMgNC4yMDcwMyA0LjUyMzI3IDMuOTUzMTIgNC41MTkwNFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4='
};

window.addEventListener('click', function(e) {
	e = e || window.event;
	var target = event && event.target,
		tagName=target && target.tagName || '',
		className=target && target.className || '';

	if (tagName === 'A' || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA' || tagName === 'BUTTON') return;
	if (className.indexOf('sample-box') > -1) return;

	var modal = document.querySelectorAll("div.sample-box") || [];
	modal.forEach(function(element) {
		if (element && element.style) {
			element.style.display="none";
		}
	});
});

function OutsideClick(parentElement, isOpen, handler)
{
	if (window === this) return;
	var self = this;
	alert(self);
	self.parentElement = parentElement;
	self.handler = handler;
	self.isOpen  = isOpen;
	self.handleOutsideClick = self.handleOutsideClick.bind(self);
	document.addEventListener('click', function(e) {
		self.handleOutsideClick.bind(self);
	});
}

OutsideClick.prototype.handleOutsideClick = function(e) {
	e = e || window.event;
	var target = event && event.target;
	var self   = this;
	alert(self);
	if (!self.parentElement.contains(target) && self.isOpen) {
		self.handler();
		console.log('Clicked outside');
	}
};

OutsideClick.prototype.destroy = function() {
	document.removeEventListener('click', this.handleOutsideClick);
};

function GenerateTheMainMenuDateAndTime(params) {
	// Sun 7 Jul 4:27 AM
	var date       = new Date();
	var days       = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months     = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var dayOfWeek  = days[date.getDay()];
	var dayOfMonth = date.getDate();
	var month      = months[date.getMonth()];
	var hours      = date.getHours();
	var minutes    = date.getMinutes();
	var ampm       = hours > 12 ? "PM" : "AM";

	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	var minutesFormatted  = (minutes < 10) ? ('0' + minutes) : minutes;
	var formattedDateTime = [dayOfWeek, ' ', dayOfMonth, month, ' ', hours, ':', minutesFormatted, ampm].join('');
	var menu = document.getElementById('main_menu_right_div_time_and_date');
	if (menu) menu.textContent = formattedDateTime;
}

function Dropdown(parentElement, dropdownContent, isOpen, onStateChange)
{
	if (window === this) return;
	var self=this;
	alert(self);
	self.parentElement   = parentElement;
	self.dropdownContent = dropdownContent;
	self.isOpen          = isOpen;
	self.onStateChange   = onStateChange;

	console.log(parentElement, dropdownContent, isOpen, onStateChange);

	self.parentElement.addEventListener('click', function(e) {
		self.toggleDropdown.bind(self);
	});
}

Dropdown.prototype.toggleDropdown = function() {
	var self=this;
	self.isOpen = !self.isOpen;
	console.log(self.isOpen);
	self.onStateChange && self.onStateChange(self.isOpen);
	if (self.isOpen) {
		self.openDropdown();
	} else {
		self.closeDropdown();
	}
};

Dropdown.prototype.openDropdown = function() {
	var self=this;
	self.parentElement.appendChild(self.dropdownContent);
};

Dropdown.prototype.closeDropdown = function() {
	var self=this;
	if (self.dropdownContent && self.dropdownContent.parentNode) {
		self.dropdownContent.parentNode.removeChild(self.dropdownContent);
	}
};

function menuBar() {
	// main_menu
	var mainMenuBar = document.createElement('menu');
	mainMenuBar.className = 'main_menu';

	var rootElement = document.getElementById('__root') || document.body;
	rootElement.appendChild(mainMenuBar);

	// left main_menu
	var menuLeftDiv = document.createElement('div');
	menuLeftDiv.className = 'main_menu_child';

	var appleIcon = document.createElement('img');
	appleIcon.src = svgMappings['apple-icon'];
	menuLeftDiv.appendChild(appleIcon);
	mainMenuBar.appendChild(menuLeftDiv);

	// right main_menu
	var menuRightDiv = document.createElement('div');
	menuRightDiv.className = 'main_menu_child gap-x-4';
	mainMenuBar.appendChild(menuRightDiv);
	// menu contorl buttons

	// focus button
	//states
	var state = {
		isDropdownOpen: false
	};

	var handler = {
		set(target, property, value) {
			target[property] = value;
			console.log(property, " is now ", value);
			if (property === 'isDropdownOpen') {
				if (value) {
					dropdownContentMenu.style.display = 'block';
				} else {
					dropdownContentMenu.style.display = 'none';
				}
			}
			return true;
		}
	};

	var reactiveState = new Proxy(state, handler);

	var focusButton = document.createElement('button');
	focusButton.className = 'items-center button';
	var focusIcon = document.createElement('img');
	focusIcon.src = svgMappings['focus'];
	focusButton.appendChild(focusIcon);
	menuRightDiv.appendChild(focusButton);

	var dropdownContentMenu = document.createElement('div');
	dropdownContentMenu.className = 'sample-box';

	var dropdown = new Dropdown(focusButton, dropdownContentMenu, reactiveState.isDropdownOpen, function(newState) {
		reactiveState.isDropdownOpen = newState;
		alert(newState);
	});

	console.log("isDropdownOpen initially:", reactiveState.isDropdownOpen);

	var outsideClickDetector = new OutsideClick(dropdownContentMenu, reactiveState.isDropdownOpen, function() {
		dropdown.closeDropdown();
		reactiveState.isDropdownOpen = false;
	});

	document.addEventListener('click', function(e) {
		outsideClickDetector.handleOutsideClick();
		outsideClickDetector.destroy();
	});


	// Creating wifi button
	var wifiButton = document.createElement('button');
	wifiButton.className = 'items-center';
	var wifiIcon = document.createElement('img');
	wifiIcon.src = svgMappings['wifi'];
	wifiButton.appendChild(wifiIcon);
	menuRightDiv.appendChild(wifiButton);

	// Creating control center button
	var controlCenterButton = document.createElement('button');
	controlCenterButton.className = 'items-center';
	var controlCenterIcon = document.createElement('img');
	controlCenterIcon.src = svgMappings['control-center'];
	controlCenterButton.appendChild(controlCenterIcon);
	menuRightDiv.appendChild(controlCenterButton);

	// date and time on right main_menu
	var dateAndTime = document.createElement('div');
	dateAndTime.id = 'main_menu_right_div_time_and_date';
	dateAndTime.className = 'text-standard';
	menuRightDiv.appendChild(dateAndTime);
	mainMenuBar.appendChild(menuRightDiv);

	GenerateTheMainMenuDateAndTime();
	window.setInterval(GenerateTheMainMenuDateAndTime, 60000);
}

window.onload = function(e) {
	menuBar();
};
