#!/bin/bash

#  __  __ _    ____
# |  \/  | | _|  _ \  ___   ___ ___
# | |\/| | |/ / | | |/ _ \ / __/ __|
# | |  | |   <| |_| | (_) | (__\__ \
# |_|  |_|_|\_\____/ \___/ \___|___/

mkdocs build --clean --config-file mkdocs/characters/mkdocs.yml --site-dir ../../characters
rm -rf mkdocs
