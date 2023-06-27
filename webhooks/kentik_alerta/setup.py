from setuptools import find_packages, setup

version = '1.0.0'

setup(
    name="alerta-kentik",
    version=version,
    description="Alerta webhook for Kentik",
    url="http://localhost/",
    license="none",
    author="JC",
    author_email="packet@packet.com",
    packages=find_packages(),
    py_modules=["alerta_kentik"],
    install_requires=[],
    include_package_data=True,
    zip_safe=True,
    entry_points={"alerta.webhooks": ["kentik = alerta_kentik:kentikWebhook"]},
)
