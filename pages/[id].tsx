import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/Viewer.module.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function ImageViewer() {
  const router = useRouter();
  const { id } = router.query;
  const [url, setURL] = useState<string | undefined>();

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.logo_wrapper}`}>
        <Image
          className={`${styles.logo}`}
          alt='Logo'
          src='/images/logo.jpg'
          fill
        />
      </div>
      <p className={`${styles.limit}`}>다운로드 기간: 11/20~12/1</p>
      {url ?? (
        <img
          className={`${styles.image}`}
          alt='이미지'
          src={`http://photo-back.dgmanga.kr/files/${id}`}
        />
      )}
      <a
        href={`http://photo-back.dgmanga.kr/down/${id}`}
        className={`${styles.download}`}
      >
        다운로드
      </a>
    </div>
  );
}
