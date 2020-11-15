---
title: 'Actions'
---

## Actions

Actions are instructions available in the [`Preset` singleton](/docs/concepts/configuration/#configuration). They are a layer of abstraction for diverse kind of manipulations, such as copies, editions, deletions, installations, and more.

They are the key concept of Preset. They are easy to use and powerful enough to make almost any kind of preset.

## Available actions

The following actions are implemented:

| Name                                                    | Description                                              |
| ------------------------------------------------------- | -------------------------------------------------------- |
| [Extract](/docs/api/extract/)                           | Extracts file from the preset's template directory       |
| [Apply](/docs/api/apply/)                               | Applies other presets                                    |
| [Edit JSON](/docs/api/edit-json/)                       | Edits existing JSON files in the target directory        |
| [Edit Env](/docs/api/edit-env/)                         | Edits existing `.env` files in the target directory      |
| [Edit](/docs/api/edit/)                                 | Edits existing files in the target directory             |
| [Delete](/docs/api/delete/)                             | Deletes existings files in the target directory          |
| [Hook](/docs/api/hook/)                                 | Executes arbistrary code                                 |
| [Install dependencies](/docs/api/install-dependencies/) | Installs Node or PHP dependencies                        |
| [Prompt](/docs/api/prompt/)                             | Asks the user for information                            |
| [Execute](/docs/api/execute/)                           | Executes a system command                                |
| [Group](/docs/api/group/)                               | Runs multiple actions under the same title or conditions |
