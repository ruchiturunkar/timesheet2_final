use Mix.Config

# Configure your database
config :times2, Times2.Repo,
  username: "times2",
  password: "ua0Daishudie",
  database: "times2_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :times2, Times2Web.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
