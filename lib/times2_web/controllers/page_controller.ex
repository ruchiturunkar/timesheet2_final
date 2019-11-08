defmodule Times2Web.PageController do
  use Times2Web, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
