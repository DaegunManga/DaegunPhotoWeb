import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/Viewer.module.css';

export default function ImageViewer() {
  const router = useRouter();
  const { id } = router.query;

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
      <p>다운로드 기간: 11/20~12/1</p>
      <Image
        alt='이미지'
        src={`${process.env.BASE_URL}/image/${id}`}
        width='680'
        height='1080'
      />
      <button>다운로드</button>
    </div>
  );
}
