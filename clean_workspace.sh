#!/bin/bash

# Function to clean directories recursively
clean_directories() {
    local root_dir="$1"

    # Delete the "dist" directory if it exists
    if [ -d "$root_dir/dist" ]; then
        echo "Cleaning dist directory in $root_dir..."
        rm -rf "$root_dir/dist"
    fi

    # Delete the "node_modules" directory if it exists
    if [ -d "$root_dir/node_modules" ]; then
        echo "Cleaning node_modules directory in $root_dir..."
        rm -rf "$root_dir/node_modules"
    fi

    # Delete the ".turbo" directory if it exists
    if [ -d "$root_dir/.turbo" ]; then
        echo "Cleaning .turbo directory in $root_dir..."
        rm -rf "$root_dir/.turbo"
    fi

    # Recurse into subdirectories
    for dir in "$root_dir"/*; do
        if [ -d "$dir" ]; then
            clean_directories "$dir"
        fi
    done
}

# Start cleaning from the current directory
clean_directories .

echo "Cleanup complete."