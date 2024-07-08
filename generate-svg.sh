BASE_DIR="./assets"
OUTPUT_FILE="./assets/index.js"

# Ensure the output directory exists
mkdir -p "$(dirname "$OUTPUT_FILE")"

# Begin generating JavaScript file
echo "const svgMappings = {" > "$OUTPUT_FILE"

# Loop through each SVG file in the base directory and subdirectories
find "$BASE_DIR" -type f -name "*.svg" | while read -r svg_file; do
  # Get the base name of the file (without path and extension)
  base_name=$(basename "$svg_file" .svg)

  # Read the SVG file content
  SVG_CONTENT=$(cat "$svg_file")

  # Convert the SVG content to a Base64 string
  SVG_BASE64=$(echo -n "$SVG_CONTENT" | base64)

  # Append the mapping to the JavaScript object
  echo "  \"$base_name\": 'data:image/svg+xml;base64,$SVG_BASE64'," >> "$OUTPUT_FILE"
done

# Complete JavaScript object
echo "};" >> "$OUTPUT_FILE"
echo "export default svgMappings;" >> "$OUTPUT_FILE"

# Print success message
echo "SVG mappings generated in $OUTPUT_FILE"
