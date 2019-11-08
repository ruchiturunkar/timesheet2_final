defmodule Times2.Repo.Migrations.CreateTimesheets do
  use Ecto.Migration

  def change do
    create table(:timesheets) do
      add :jobId, :string
      add :hours, :integer
      add :date, :date
      add :status, :string
      add :user, references(:users, on_delete: :nothing)
      add :manager, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:timesheets, [:user])
    create index(:timesheets, [:manager])
  end
end
