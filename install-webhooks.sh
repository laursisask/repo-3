while read webhook version; do
  echo "Installing '${webhook}' (${version})"
  /venv/bin/pip install $PWD/${webhook}
done </app/webhooks.txt
