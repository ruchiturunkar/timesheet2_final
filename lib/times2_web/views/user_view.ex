defmodule Times2Web.UserView do
  use Times2Web, :view
  alias Times2Web.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.name,
      email: user.email,
      isManager: user.isManager,
      manager: user.manager,
      password_hash: user.password_hash}
  end
end
