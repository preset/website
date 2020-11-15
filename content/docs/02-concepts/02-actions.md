---
title: 'Actions'
---

## Actions

Actions are instructions available in the [`Preset` singleton](/docs/concepts/configuration/#configuration). They are a layer of abstraction for diverse kind of manipulations, such as copies, editions, deletions, installations, and more.

They are the key concept of Preset. They are easy to use and powerful enough to make almost any kind of preset.

## Available actions

The following actions are implemented:

| Name                                                        | Description                                                                |
| ----------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Extract](/docs/actions/extract/)                           | Extracts file from the preset's template directory to the target directory |
| [Apply](/docs/actions/apply/)                               | Applies other presets                                                      |
| [Edit JSON](/docs/actions/edit-json/)                       | Edits existing JSON files in the target directory                          |
| [Edit Env](/docs/actions/edit-env/)                         | Edits existing `.env` files in the target directory                        |
| [Edit](/docs/actions/edit/)                                 | Edits existing files in the target directory                               |
| [Delete](/docs/actions/delete/)                             | Deletes existings files in the target directory                            |
| [Hook](/docs/actions/hook/)                                 | Executes arbistrary code                                                   |
| [Install dependencies](/docs/actions/install-dependencies/) | Installs Node or PHP dependencies                                          |
| [Prompt](/docs/actions/prompt/)                             | Asks the user for information                                              |
| [Execute](/docs/actions/execute/)                           | Executes a system command                                                  |
| [Group](/docs/actions/group/)                               | Runs multiple actions under the same title or conditions                   |
