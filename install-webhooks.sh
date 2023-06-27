while read webhook version; do
  echo "Installing '${webhook}' (${version})"
  /venv/bin/pip install $PWD/webhooks/${webhook}
done </app/webhooks.txt
