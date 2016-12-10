---
title: My Second Post!
date: "2015-12-10T23:46:37.121Z"
layout: post
path: "/my-second-post/"
---

Wow! I love blogging so much already.

Here is some code from my fantasy sports website [The 338 Challenge](https://github.com/axelclark/ex338).

```elixir
defmodule Ex338.RosterAdmin do
  @moduledoc false

  alias Ex338.{RosterPosition}

  def add_open_positions_to_team(
    %{roster_positions: positions} = fantasy_team_query) do
     {unassigned, positions} = separate_unassigned positions

    positions
    |> add_open_positions
    |> update_fantasy_team(fantasy_team_query)
    |> add_unassigned(unassigned)
  end
end
```
