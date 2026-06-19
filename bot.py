# bot.py
import os
import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# Logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Bot tokenini olish
BOT_TOKEN = os.environ.get('BOT_TOKEN', 'YOUR_BOT_TOKEN_HERE')
WEB_APP_URL = os.environ.get('WEB_APP_URL', 'https://your-domain.com')

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Start komandasi"""
    user = update.effective_user
    first_name = user.first_name if user.first_name else "aziz"
    
    keyboard = [
        [InlineKeyboardButton("🚀 Zakaz berish", web_app={"url": WEB_APP_URL})],
        [InlineKeyboardButton("📞 Aloqa", url="https://t.me/optom_unchi")],
        [InlineKeyboardButton("📢 Kanal", url="https://t.me/motabar_andijon")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        f"👋 Assalomu alaykum, {first_name}!\n\n"
        "🏪 Mo'tabar Un Markazi - Andijon viloyatida joylashgan, eng sifatli va arzon un mahsulotlarini yetkazib beruvchi va sotuvchi markaz sizning xizmatingizda!\n\n"
        "🛒 Pastdagi tugma orqali zakaz berishingiz mumkin.",
        reply_markup=reply_markup
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Yordam komandasi"""
    await update.message.reply_text(
        "🆘 Yordam:\n\n"
        "1. /start - Botni qayta ishga tushirish\n"
        "2. '🚀 Zakaz berish' tugmasini bosing - Mahsulotlarni ko'rish va zakaz berish\n"
        "3. '📞 Aloqa' tugmasi - Operator bilan bog'lanish\n"
        "4. '📢 Kanal' tugmasi - Bizning kanalga obuna bo'lish\n"
        "5. Savollar bo'lsa @optom_unchi ga yozing"
    )

async def about(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Biz haqimizda"""
    await update.message.reply_text(
        "🌾 Mo'tabar Un Markazi\n\n"
        "📍 Manzil: Andijon viloyati, Jaxon Bozori\n"
        "📅 Tashkil etilgan: 1998-yil\n\n"
        "💪 25+ yillik tajriba\n"
        "✅ Sifat kafolati\n"
        "🚚 Tez yetkazib berish\n\n"
        "🏷️ Bizning mahsulotlar:\n"
        "• MO'TABAR (1-nav, 2-nav, Premium)\n"
        "• QADIMGI-NAV\n"
        "• ADMIRAL\n"
        "• CHESTER\n"
        "• CORNER\n"
        "• DANI-NAN\n"
        "• ORDABASY\n"
        "• DIKHAN-BABA\n"
        "• DOBRIY MELNIK\n"
        "• KEREMET\n"
        "• ELIT KOSTANAY\n"
        "• SALAMAT\n"
        "• TROYKA\n"
        "• UNO\n"
        "• YARKO\n"
        "• ZO'R\n\n"
        "📦 50 kg va 25 kg paketlarda"
    )

async def handle_webapp_data(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Web App dan kelgan ma'lumotlarni qayta ishlash"""
    data = update.message.web_app_data
    if data:
        await update.message.reply_text(
            "✅ Zakaz qabul qilindi! Tez orada operator siz bilan bog'lanadi.\n\n"
            "📞 Savollar bo'lsa: @optom_unchi"
        )

def main():
    """Botni ishga tushirish"""
    app = Application.builder().token(BOT_TOKEN).build()
    
    # Komandalar
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("about", about))
    
    # Web App ma'lumotlarini qayta ishlash
    app.add_handler(telegram.ext.MessageHandler(
        telegram.ext.filters.TEXT & telegram.ext.filters.WebAppData,
        handle_webapp_data
    ))
    
    # Botni ishga tushirish
    logger.info("🚀 Bot ishga tushdi...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
