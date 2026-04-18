#!/bin/bash
# 同步 AI Daily Blog 报告到 docs 目录

SOURCE_DIR="/Users/super_xiao/Documents/AI_Daily_Blog"
DOCS_DIR="/Users/super_xiao/Documents/ai-daily-blog-site/docs"

# 清空 docs 目录（保留 index.md）
rm -rf "$DOCS_DIR"/*
cp "$DOCS_DIR/index.md" /tmp/_index.md 2>/dev/null || true

# 复制所有日报文件夹
for dir in "$SOURCE_DIR"/*-AI-Daily-Blog; do
  if [ -d "$dir" ]; then
    basename=$(basename "$dir")
    mkdir -p "$DOCS_DIR/$basename"
    cp "$dir"/*.md "$DOCS_DIR/$basename/"
    echo "✅ Copied $basename"
  fi
done

cp /tmp/_index.md "$DOCS_DIR/index.md" 2>/dev/null || true
echo "🎉 Sync complete!"
