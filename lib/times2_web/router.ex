defmodule Times2Web.Router do
  use Times2Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :ajax do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Plug.CSRFProtection
  end

  scope "/ajax", Times2Web do
    pipe_through :ajax
    resources "/users", UserController, except: [:new, :edit]
    resources "/timesheets", TimesheetController, except: [:new, :edit]
    resources "/sessions", SessionController, only: [:create], singleton: true
  end

#  pipeline :api do
#    plug :accepts, ["json"]
#  end

  scope "/", Times2Web do
    pipe_through :browser

    get "/", PageController, :index
    get "/*path", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", Times2Web do
  #   pipe_through :api
  # end
end
