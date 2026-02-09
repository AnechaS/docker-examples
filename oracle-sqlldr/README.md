# Oracle SQLLDR

```bash
docker run --rm -i \
  -v "$FS_CONTROL_FILE:/work/$(basename $FS_CONTROL_FILE)" \
  -v "$FS_DATA_FILE:/work/$(basename $FS_DATA_FILE)" \
  -v "${FS_LOG_FILE%/SQLLoader/*}:/work/log" \
  -e FS_DB_UID="$FS_DB_UID" \
  -e FS_DB_PWD="$FS_DB_PWD" \
  -e FS_DB_SID="host.docker.internal:1521/$FS_DB_SID" \
  -e FS_CONTROL_FILE="/work/$(basename $FS_CONTROL_FILE)" \
  -e FS_DATA_FILE="/work/$(basename $FS_DATA_FILE)" \
  -e FS_LOG_FILE="/work/log/SQLLoader/${FS_LOG_FILE##*/SQLLoader/}" \
  -e FS_BAD_FILE="/work/log/SQLLoader/${FS_BAD_FILE##*/SQLLoader/}" \
  marioecu/oracle-linux-sqlplus-sqlldr:1.0 \
  sh -c '
      mkdir -p /work/log/SQLLoader && \
      sqlldr userid="$FS_DB_UID/$FS_DB_PWD@$FS_DB_SID" \
        control="$FS_CONTROL_FILE" \
        data="$FS_DATA_FILE" \
        log="$FS_LOG_FILE" \
        bad="$FS_BAD_FILE" \
        ROWS=5000
    '
status=$?
```
