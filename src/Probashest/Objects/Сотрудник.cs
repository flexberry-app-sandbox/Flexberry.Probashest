﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probashest
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудник CustomAttributes)

    // *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "ФИО as \'ФИО\'",
            "Должности as \'Должности\'",
            "Должности.Должность as \'Должность\'",
            "ДатаРождения as \'Дата рождения\'",
            "СерНомПаспорта as \'Сер ном паспорта\'",
            "Телефон as \'Телефон\'"}, Hidden=new string[] {
            "Должности.Должность"})]
    [MasterViewDefineAttribute("СотрудникE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Должность")]
    [View("СотрудникL", new string[] {
            "ФИО as \'ФИО\'",
            "Должности.Должность as \'Должность\'",
            "ДатаРождения as \'Дата рождения\'",
            "СерНомПаспорта as \'Сер ном паспорта\'",
            "Телефон as \'Телефон\'"})]
    public class Сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private System.DateTime fДатаРождения;
        
        private int fСерНомПаспорта;
        
        private int fТелефон;
        
        private IIS.Probashest.Должности fДолжности;
        
        // *** Start programmer edit section *** (Сотрудник CustomMembers)

        // *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Get start)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Get end)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Set start)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Set end)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// СерНомПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.СерНомПаспорта CustomAttributes)
        public virtual int СерНомПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Get start)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Get start)
                int result = this.fСерНомПаспорта;
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Get end)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Set start)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Set start)
                this.fСерНомПаспорта = value;
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Set end)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Get start)

                // *** End programmer edit section *** (Сотрудник.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудник.Телефон Get end)

                // *** End programmer edit section *** (Сотрудник.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Set start)

                // *** End programmer edit section *** (Сотрудник.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудник.Телефон Set end)

                // *** End programmer edit section *** (Сотрудник.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ФИО Get start)

                // *** End programmer edit section *** (Сотрудник.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудник.ФИО Get end)

                // *** End programmer edit section *** (Сотрудник.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ФИО Set start)

                // *** End programmer edit section *** (Сотрудник.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудник.ФИО Set end)

                // *** End programmer edit section *** (Сотрудник.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Должности CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.Probashest.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Get start)

                // *** End programmer edit section *** (Сотрудник.Должности Get start)
                IIS.Probashest.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Сотрудник.Должности Get end)

                // *** End programmer edit section *** (Сотрудник.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Set start)

                // *** End programmer edit section *** (Сотрудник.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Сотрудник.Должности Set end)

                // *** End programmer edit section *** (Сотрудник.Должности Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.Probashest.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.Probashest.Сотрудник));
                }
            }
        }
    }
}
