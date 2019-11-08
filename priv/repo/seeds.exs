# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Times2.Repo.insert!(%Times2.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
#
#
#
#
alias Times2.Repo
alias Times2.Users.User

pw = Argon2.hash_pwd_salt("Acme@123")

Repo.insert!(%User{name: "Alice", email: "alice@acme.com", isManager: true, manager: "Alice", password_hash: pw})
Repo.insert!(%User{name: "Bob", email: "bob@acme.com", isManager: false, manager: "Richard", password_hash: pw})
