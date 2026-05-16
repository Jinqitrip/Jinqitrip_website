'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { UserOutlined, MailOutlined, EditOutlined, SendOutlined, CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import type { Translations } from '@/i18n/translations';
import styles from './ContactForm.module.css';

const SERVICE_ID    = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID        ?? '';
const TEMPLATE_ID   = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID       ?? '';
const REPLY_TMPL_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_REPLY_ID ?? '';
const PUBLIC_KEY    = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY         ?? '';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ t }: { t: Translations['contactForm'] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      // 1. 通知你（表单内容发到你的邮箱）
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });

      // 2. 自动回复给用户
      const data = new FormData(formRef.current);
      await emailjs.send(
        SERVICE_ID,
        REPLY_TMPL_ID,
        {
          to_name:  data.get('from_name') as string,
          to_email: data.get('reply_to')  as string,
        },
        { publicKey: PUBLIC_KEY },
      );

      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>{t.title}</h3>
      <p className={styles.desc}>{t.desc}</p>

      {status === 'success' ? (
        <div className={styles.successMsg}>
          <CheckCircleOutlined />
          <span>{t.successMsg ?? '提交成功，确认邮件已发至您的邮箱！'}</span>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <UserOutlined className={styles.fieldIcon} />
            <input name="from_name" type="text" placeholder={t.namePlaceholder} required />
          </div>
          <div className={styles.field}>
            <MailOutlined className={styles.fieldIcon} />
            <input name="reply_to" type="email" placeholder={t.emailPlaceholder} required />
          </div>
          <div className={styles.field}>
            <EditOutlined className={`${styles.fieldIcon} ${styles.top}`} />
            <textarea name="message" placeholder={t.messagePlaceholder} rows={5} />
          </div>

          {status === 'error' && (
            <p className={styles.errorMsg}>{t.errorMsg ?? '发送失败，请稍后重试。'}</p>
          )}

          <button type="submit" className="theme-btn" disabled={status === 'sending'}>
            <span>
              {status === 'sending'
                ? <><LoadingOutlined /> {t.sending ?? '发送中…'}</>
                : <><SendOutlined /> {t.submit}</>
              }
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
