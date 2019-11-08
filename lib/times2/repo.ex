defmodule Times2.Repo do
  use Ecto.Repo,
    otp_app: :times2,
    adapter: Ecto.Adapters.Postgres
end
