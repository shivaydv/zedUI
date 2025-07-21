- add sitemap and robot.txt files

### Tips & Potential Optimizations
- Error Handling: Ensure all async operations (especially file reads/writes) have robust error handling and logging.

- Registry Build Performance: If the number of components grows, consider batching or parallelizing file operations in the build script for speed.

- Component Lazy Loading: If you have many components, consider chunking or grouping them to avoid too many small bundles.