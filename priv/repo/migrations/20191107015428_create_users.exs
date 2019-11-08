defmodule Times2.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :email, :string
      add :isManager, :boolean, default: false, null: false
      add :manager, :string
      add :password_hash, :string

      timestamps()
    end

  end
end
